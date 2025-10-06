import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage';
import { AboutMeComponent } from './about-me/about-me';
import { ExperienceComponent } from './experience/experience';

export const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: '**', redirectTo: '' }
];
