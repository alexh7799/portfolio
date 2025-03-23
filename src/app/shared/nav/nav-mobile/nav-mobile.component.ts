import { Component } from '@angular/core';
import { ScrollbarToSectionService } from '../../services/scrollbar-to-section.service';
import { Subscription } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss'
})
export class NavMobileComponent {
  currentLang: string = 'de';
  isMenuOpen = false;
  activeSection: string = 'hero-mobile';
  private subscription: Subscription;

  constructor(private scrollbarToSectionService: ScrollbarToSectionService, private translate: TranslateService, private router: Router) {
    this.subscription = this.scrollbarToSectionService.activeSection$.subscribe(
      section => this.activeSection = section
    );
    translate.setDefaultLang('de');
    this.currentLang = translate.currentLang || 'de';
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }
  
    onNavigate(sectionId: string) {
      this.activeSection = sectionId;
      if (this.activeSection === 'hero-mobile') {
        this.router.navigate(['/']); // Navigation zur Startseite
      }
      this.scrollbarToSectionService.scrollToSection(sectionId);
    }

    theRespMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
}
