import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ResumeComponent} from './resume/resume.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent}
];
