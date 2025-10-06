import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  imports: [CommonModule],
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Agentic AI Test Automation',
      description: `Designed an Agentic AI-based solution that executes UI test cases from a single natural language prompt.\nEnabled dynamic generation of automation frameworks across languages (Java, Python, JavaScript).\nReduced manual framework maintenance and accelerated engineer productivity.`,
      techStack: 'Python, MCP, Autogen Framework, GPT-4.0 LLM.'
    },
    {
      title: 'Self-Healing Test Automation Framework',
      description: `Led the migration to a Healium self-healing automation framework, dynamically updating XPath locators to handle UI changes.\nReduced script maintenance effort by 60% and improved test reliability across frequent releases.`,
      techStack: 'Java, Selenium, Healenium, TestNG, Cucumber.'
    }
  ];
}
