
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// Simple flat skills array for compact star-based display

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Java', stars: 4 },
    { name: 'Selenium', stars: 5 },
    { name: 'TestNG', stars: 4 },
    { name: 'Cucumber', stars: 4 },
    { name: 'Docker', stars: 3 },
    { name: 'Azure', stars: 3 },
    { name: 'Python', stars: 4 },
    { name: 'Playwright', stars: 4 },
    { name: 'Jenkins', stars: 3 },
    { name: 'Langchain framework', stars: 3 },
    { name: 'Autogen Framework', stars: 3 },
    { name: 'Angular', stars: 3 }
  ];
}
