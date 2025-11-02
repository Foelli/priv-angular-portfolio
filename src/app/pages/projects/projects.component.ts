import { Component, computed, signal } from '@angular/core';
import { Project } from '../../shared/ui';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      title: 'Smartes Gameboard',
      blurb: 'Interactive, web-based gaming system with real-time communication between physical figures and digital playing field.',
      tags: ['DND', 'Web App', 'Angular', 'IoT'],
      code: 'offline',
      category: 'Web App',
      tech: ['Angular', 'Quarkus', 'Docker', 'Java', 'MongoDB']
    },
  ]);
}
