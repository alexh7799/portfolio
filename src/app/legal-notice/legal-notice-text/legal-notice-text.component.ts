import { Component, OnInit, OnDestroy  } from '@angular/core';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-legal-notice-text',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './legal-notice-text.component.html',
  styleUrl: './legal-notice-text.component.scss'
})
export class LegalNoticeTextComponent implements OnInit, OnDestroy {
  legal = {
    isActive: false
  }
  legalNoticeContent!: SafeHtml;
  private langChangeSubscription!: Subscription;

  constructor(
    private sanitizer: DomSanitizer,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.updateContent();
    this.langChangeSubscription = this.translateService.onLangChange.subscribe(() => {
      this.updateContent();
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  private updateContent() {
    this.translateService.get('legal-notice').subscribe(translatedText => {
      this.legalNoticeContent = this.sanitizer.bypassSecurityTrustHtml(translatedText);
    });
  }
}