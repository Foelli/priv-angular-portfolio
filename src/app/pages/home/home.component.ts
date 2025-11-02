import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [AboutComponent, ProjectsComponent],
})
export class HomeComponent {
  currentYear: number = new Date().getFullYear();
}
