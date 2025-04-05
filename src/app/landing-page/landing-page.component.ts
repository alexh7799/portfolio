import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { SocialMediaComponent } from "./social-media/social-media.component";
import { MyWorkComponent } from './my-work/my-work.component';
import { WhyMeComponent } from "./why-me/why-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterDesktopComponent } from "../shared/footer/footer-desktop/footer-desktop.component";
import { ReferenceComponent } from "./reference/reference.component";
import { HeroComponent } from './hero/hero.component';
import { FooterMobileComponent } from "../shared/footer/footer-mobile/footer-mobile.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroComponent, SocialMediaComponent, MyWorkComponent, WhyMeComponent, SkillsComponent, ContactComponent, FooterDesktopComponent, ReferenceComponent, FooterMobileComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('desktopContainer') container?: ElementRef;
  private scrollMultiplier = 0.5;

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
