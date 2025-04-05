import { Component, Input, input } from '@angular/core';
import { ScrollbarToSectionService } from '../services/scrollbar-to-section.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() name = '';
  @Input() href = '';
  @Input() isExternalLink = false;

  constructor(private scrollbarToSectionService: ScrollbarToSectionService) { }
    
  onNavigate() {
    if (this.isExternalLink) {
      window.location.href = this.href;
    } else {
      this.scrollbarToSectionService.scrollToSection(this.href);
    }
  }
}
