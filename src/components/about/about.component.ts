import { Component } from '@angular/core';

@Component({
  selector: 'sc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [],
})
export default class AboutComponent {
  title: string = 'About Sreecodes';
  description: string =
    'I am a software engineer with a passion for building scalable and maintainable applications. I specialize in JavaScript, TypeScript, and Angular. I am currently working on Torry Harris Business Solutions, as a Software developer.';
}
