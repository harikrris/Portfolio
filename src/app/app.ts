import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { HomepageComponent } from './homepage/homepage';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { AboutMeComponent } from './about-me/about-me';
import { ExperienceComponent } from './experience/experience';
import { SkillsComponent } from './skills/skills';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [Navbar, HomepageComponent, AboutMeComponent, ExperienceComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('angular-portfolio');
  @ViewChild('contactRef') contactRef?: ContactComponent;

  constructor(private router: Router) {
    // Enable fragment scrolling
     
  }

    ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.handleFragmentNavigation();
      });
  }

  private handleFragmentNavigation() {
    const fragment = this.router.parseUrl(this.router.url).fragment;
    if (fragment) {
      setTimeout(() => {
        this.scrollToFragment(fragment);
      }, 100);
    }
  }

  private scrollToFragment(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Called by navbar to open contact modal
  openContact() {
    this.contactRef?.open();
  }
}