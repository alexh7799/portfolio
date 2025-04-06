import { Component } from '@angular/core';
import { TranslateModule} from '@ngx-translate/core';
import { ContactService } from '../../shared/services/contact-service.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../shared/services/language-service.service';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  currentLang: string = 'de';
  icon = [
    {
      image: 'email-default.svg',
      hoverImage: 'email-hover.svg'
    },
    {
      image: 'linkedin-default.svg',
      hoverImage: 'linkedin-hover.svg'
    },
    {
      image: 'github-default.svg',
      hoverImage: 'github-hover.svg'
    },
  ];

  constructor(public languageService: LanguageService, private contactService: ContactService) {}

  switchLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
  }

  changeImage(index: number, isHovered: boolean) {
    this.icon[index].image = isHovered ? 
      this.icon[index].hoverImage : 
      this.icon[index].image.replace('-hover', '-default');
  }

  openExternalLink(url: string) {
    window.location.href = url;
  }

  onEmailClick() {
    this.contactService.sendEmail();
  }
}
