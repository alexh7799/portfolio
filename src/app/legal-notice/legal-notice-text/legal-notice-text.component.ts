import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice-text',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './legal-notice-text.component.html',
  styleUrl: './legal-notice-text.component.scss'
})
export class LegalNoticeTextComponent {
  legal = {
    isActive: false
  }

  
}
