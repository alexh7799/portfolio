import { Component, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('desktopContainer') container?: ElementRef;
  private scrollMultiplier = 0.5;
  policy = {
    isActive: false
  }
  legalnotice = {
    isActive: false
  }

  constructor() { }

  ngAfterViewInit() {
    if (this.container) {
      this.container.nativeElement.addEventListener('wheel', this.handleWheel);
    }
  }

  ngOnDestroy() {
    if (this.container) {
      this.container?.nativeElement.removeEventListener('wheel', this.handleWheel);
    }
  }

  private handleWheel = (e: WheelEvent) => {
    if (this.container) {
      e.preventDefault();
      const scrollAmount = e.deltaY * this.scrollMultiplier;
      this.container?.nativeElement.scrollBy({
        right: scrollAmount,
        left: scrollAmount,
        behavior: 'auto'
      });
    };
  }
}