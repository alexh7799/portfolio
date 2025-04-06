import { Component } from '@angular/core';
import { ScrollbarToSectionService } from '../../services/scrollbar-to-section.service';
import { Subscription } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language-service.service';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss'
})
export class NavMobileComponent {
  isMenuOpen = false;
  activeSection: string = 'hero-mobile';
  private subscription: Subscription;

  constructor(
    private scrollbarToSectionService: ScrollbarToSectionService,
    public languageService: LanguageService,
    private router: Router
  ) {
    this.subscription = this.scrollbarToSectionService.activeSection$.subscribe(
      section => this.activeSection = section
    );
  }

  switchLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
  }

  onNavigate(sectionId: string) {
    this.activeSection = sectionId;
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollbarToSectionService.scrollToSection(sectionId);
        }, 100);
      });
    } else {
      this.scrollbarToSectionService.scrollToSection(sectionId);
    }
    this.isMenuOpen = false;
  }

  theRespMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
