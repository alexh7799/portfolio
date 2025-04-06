import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.getStoredLanguage() || 'de';
    this.translate.setDefaultLang('de');
    this.translate.use(this.currentLang);
  }

  private getStoredLanguage(): string | null {
    try {
      return sessionStorage.getItem('selectedLang');
    } catch {
      return null;
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    try {
      sessionStorage.setItem('selectedLang', lang);
    } catch (error) {
      console.error('Failed to store language preference:', error);
    }
  }
}
