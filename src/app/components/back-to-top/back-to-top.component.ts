import { Component, OnDestroy, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css'],
})
export class BackToTopComponent implements AfterViewInit, OnDestroy {
  show = signal(false);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const target = document.getElementById('about');
    if (!target) {
      this.show.set(false);
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.show.set(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.01,
        rootMargin: '0px 0px 0px 0px',
      }
    );

    this.observer.observe(target);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  scrollToTop(): void {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  }
}
