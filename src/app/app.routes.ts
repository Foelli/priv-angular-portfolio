import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', component: AboutComponent },
    { path: '', component: ProjectsComponent },
    { path: '**', redirectTo: '' }

]