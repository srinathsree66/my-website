import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import AboutComponent from '../about/about.component';
import { RouterOutlet } from '@angular/router';
interface Skill {
  name: string;
  img: string;
  top?: number; // Optional properties
  left?: number; // Optional properties
}

@Component({
    selector: 'sc-hero',
    imports: [NgStyle, AboutComponent],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
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

  
}
