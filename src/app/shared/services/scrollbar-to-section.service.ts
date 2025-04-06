import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollbarToSectionService {
  private activeSection = new Subject<string>();
  activeSection$ = this.activeSection.asObservable();

  constructor() { }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
      this.activeSection.next(sectionId);
    }
  }
}
