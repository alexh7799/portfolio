import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ScrollbarToSectionService } from '../services/scrollbar-to-section.service';

@Component({
  selector: 'app-outerline-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outerline-button.component.html',
  styleUrl: './outerline-button.component.scss'
})
export class OuterlineButtonComponent {
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
