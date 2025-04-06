import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FooterDesktopComponent } from '../shared/footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from '../shared/footer/footer-mobile/footer-mobile.component';
import { PolicyTextComponent } from "./policy-text/policy-text.component";
import { ArrowComponent } from '../shared/arrow/arrow.component';
import { SocialMediaComponent } from '../landing-page/social-media/social-media.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [FooterDesktopComponent, SocialMediaComponent, FooterMobileComponent, PolicyTextComponent, ArrowComponent, TranslateModule],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent implements AfterViewInit, OnDestroy {
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