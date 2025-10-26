import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  imports: [CommonModule],
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Senior SDET Automation Test Engineer – TCS',
      duration: '2024 – Present',
      tagline: 'The Modernizer',
      stars: 5,
      details: [
        'Architected Selenium + TestNG framework with Maven & CI/CD',
        'Migrated to Playwright for faster, stable tests',
        'Dockerized execution for parallel cross-browser runs',
        'Mentored juniors, uplifting the entire QA practice'
      ]
    },
    {
      role: 'SDET Automation Test Engineer – TCS',
      duration: '2023 – 2024',
      tagline: 'The Framework Builder',
      stars: 5,
      details: [
        'Automated 200+ regression cases with Selenium + TestNG',
        'Cut manual effort by 30%',
        'Improved coverage & collaboration with developers',
        'Built and maintained CI/CD pipelines using GitHub Actions'
      ]
    }
    
  ];

  getStars(count: number): number[] {
    return Array(count).fill(0);
  }
}