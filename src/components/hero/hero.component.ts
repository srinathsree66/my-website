import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
interface Skill {
  name: string;
  img: string;
  top?: number; // Optional properties
  left?: number; // Optional properties
}

@Component({
  selector: 'sc-hero',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  skills: Array<Skill> = [
    { name: 'HTML', img: 'html-logo.svg' },
    { name: 'CSS', img: 'css-logo.svg' },
    { name: 'JavaScript', img: 'js-logo.svg' },
    { name: 'Angular', img: 'angular-logo.svg' },
    { name: 'React', img: 'react-logo.svg' },
    { name: 'Node.js', img: 'nodejs-logo.svg' },
  ];

  ngOnInit() {
    this.positionSkills();
  }

  positionSkills() {
    const containerWidth = 600;
    const containerHeight = 400;
    const itemWidth = 100;
    const itemHeight = 100;

    this.skills = this.skills.map((skill) => {
      let position: { top: number; left: number };
      let overlaps: boolean;

      do {
        position = {
          top: this.getRandomPosition(containerHeight, itemHeight),
          left: this.getRandomPosition(containerWidth, itemWidth),
        };
        overlaps = this.checkOverlap(position);
      } while (overlaps);

      return {
        ...skill,
        ...position,
      };
    });
  }

  getRandomPosition(containerSize: number, itemSize: number): number {
    return Math.floor(Math.random() * (containerSize - itemSize));
  }

  checkOverlap(newPosition: { top: number; left: number }): boolean {
    const itemWidth = 100;
    const itemHeight = 100;

    return this.skills.some((skill) => {
      const skillTop = skill.top || 0;
      const skillLeft = skill.left || 0;

      return !(
        newPosition.left + itemWidth < skillLeft ||
        newPosition.left > skillLeft + itemWidth ||
        newPosition.top + itemHeight < skillTop ||
        newPosition.top > skillTop + itemHeight
      );
    });
  }
}
