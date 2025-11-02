import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Project = {
  name: string;
  shortDescription: string;
  tags: string[];
  techStack: string[];
  contributions: string[];
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  // ⬇️ Wichtig: CommonModule für *ngIf/*ngFor und FormsModule für [(ngModel)]
  imports: [CommonModule, FormsModule],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  allTags: string[] = [];
  activeTag: string | null = null;
  query = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<{ projects: Project[] }>('assets/projectfiles/projects.json')
      .subscribe((data) => {
        this.projects = data.projects || [];
        this.computeTags();
        this.applyFilters();
      });
  }

  computeTags() {
    const set = new Set<string>();
    this.projects.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    this.allTags = Array.from(set).sort((a, b) => a.localeCompare(b));
  }

  setActiveTag(tag: string | null) {
    this.activeTag = tag;
    this.applyFilters();
  }

  applyFilters() {
    const q = this.query.trim().toLowerCase();
    this.filteredProjects = this.projects.filter((p) => {
      const matchesTag = this.activeTag
        ? p.tags?.includes(this.activeTag)
        : true;
      const hay = [
        p.name,
        p.shortDescription,
        ...(p.tags ?? []),
        ...(p.techStack ?? []),
      ]
        .join(' ')
        .toLowerCase();
      const matchesQuery = q ? hay.includes(q) : true;
      return matchesTag && matchesQuery;
    });
  }
}
