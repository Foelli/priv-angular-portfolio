import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  totalBlocks = 6;

  blockArray = Array.from({ length: this.totalBlocks });

  // Dynamic skills (0–100)
  skills = [
    { name: 'Frontend', level: 70 },
    { name: 'Backend', level: 50 },
    { name: 'Mobile', level: 80 },
  ];

  getActiveBlocks(level: number, total = this.totalBlocks): number {
    return Math.round(level / (100 / total));
  }
}
