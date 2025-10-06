export interface SkillGroup {
  title: string;
  skills: Array<{
    name: string;
    icon: string; // path to icon or icon class
    caption: string;
    description: string;
  }>;
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Automation Tools',
    skills: [
      { name: 'Selenium', icon: 'assets/skills/selenium.png', caption: 'Selenium', description: 'Web automation framework' },
      { name: 'TestNG', icon: 'assets/skills/testng.svg', caption: 'TestNG', description: 'Java testing framework' },
      { name: 'Cucumber', icon: 'assets/skills/cucumber.svg', caption: 'Cucumber', description: 'BDD testing tool' },
      { name: 'Playwright', icon: 'assets/skills/playwright.svg', caption: 'Playwright', description: 'Modern web automation' }
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: 'assets/skills/docker.svg', caption: 'Docker', description: 'Containerization' },
      { name: 'Jenkins', icon: 'assets/skills/jenkins.svg', caption: 'Jenkins', description: 'CI/CD automation' },
      { name: 'Azure', icon: 'assets/skills/azure.svg', caption: 'Azure', description: 'Cloud platform' }
    ]
  },
  {
    title: 'AI & Frameworks',
    skills: [
      { name: 'Autogen', icon: 'assets/skills/autogen.svg', caption: 'Autogen', description: 'AI agent framework' },
      { name: 'LangChain', icon: 'assets/skills/langchain.svg', caption: 'LangChain', description: 'AI workflow framework' }
    ]
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Java', icon: 'assets/skills/java.svg', caption: 'Java', description: 'OOP language' },
      { name: 'Python', icon: 'assets/skills/python.svg', caption: 'Python', description: 'Scripting & AI' },
      { name: 'JavaScript', icon: 'assets/skills/javascript.svg', caption: 'JavaScript', description: 'Web scripting' }
    ]
  },
  {
    title: 'Version Control & Collaboration',
    skills: [
      { name: 'Git', icon: 'assets/skills/git.svg', caption: 'Git', description: 'Version control system' },
      { name: 'Jira', icon: 'assets/skills/jira.svg', caption: 'Jira', description: 'Project tracking' },
      { name: 'Agile/Scrum', icon: 'assets/skills/agile.svg', caption: 'Agile/Scrum', description: 'Team collaboration' }
    ]
  }
];
