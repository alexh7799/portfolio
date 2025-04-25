import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollbarToSectionService } from '../services/scrollbar-to-section.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() name = '';
  @Input() href = '';
  @Input() isExternalLink = false;

  constructor(private scrollbarToSectionService: ScrollbarToSectionService, private router: Router) { }
    
  onNavigate() {
    if (this.isExternalLink) {
      window.open(this.href, '_blank');
    } else if (this.href.startsWith('/')) {
      this.router.navigate([this.href]);
    } else {
      this.scrollbarToSectionService.scrollToSection(this.href);
    }
  }
}
