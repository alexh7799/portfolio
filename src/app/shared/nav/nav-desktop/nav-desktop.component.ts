import { Component } from '@angular/core';
import { ScrollbarToSectionService } from '../../services/scrollbar-to-section.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-desktop',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav-desktop.component.html',
  styleUrl: './nav-desktop.component.scss',
})
export class NavDesktopComponent {
  activeSection: string = 'hero';
  private subscription: Subscription;
  
  constructor(private scrollbarToSectionService: ScrollbarToSectionService, private translate: TranslateService, private router: Router) {
    this.subscription = this.scrollbarToSectionService.activeSection$.subscribe(
      section => this.activeSection = section
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onNavigate(sectionId: string) {
    this.activeSection = sectionId;
    if (this.activeSection === 'hero') {
      this.router.navigate(['/']); // Navigation zur Startseite
    }
    this.scrollbarToSectionService.scrollToSection(sectionId);
  }
}
