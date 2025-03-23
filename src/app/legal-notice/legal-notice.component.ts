import { Component } from '@angular/core';
import { FooterDesktopComponent } from '../shared/footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from '../shared/footer/footer-mobile/footer-mobile.component';
import { LegalNoticeTextComponent } from "./legal-notice-text/legal-notice-text.component";
import { ArrowComponent } from '../shared/arrow/arrow.component';
import { SocialMediaComponent } from '../landing-page/social-media/social-media.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterDesktopComponent, SocialMediaComponent, FooterMobileComponent, LegalNoticeTextComponent, ArrowComponent, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  legal = {
    isActive: false
  }
  policy = {
    isActive: false
  }
}
