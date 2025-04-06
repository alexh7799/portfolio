import { Component, OnInit, OnDestroy  } from '@angular/core';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-policy-text',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './policy-text.component.html',
  styleUrl: './policy-text.component.scss'
})
export class PolicyTextComponent implements OnInit, OnDestroy {
  policy= {
    isActive: false
  }
  privacyPolicyContent!: SafeHtml;
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
    this.translateService.get('policy').subscribe(translatedText => {
      this.privacyPolicyContent = this.sanitizer.bypassSecurityTrustHtml(translatedText);
    });
  }
}
