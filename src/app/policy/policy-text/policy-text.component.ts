import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-policy-text',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './policy-text.component.html',
  styleUrl: './policy-text.component.scss'
})
export class PolicyTextComponent {

  policy = {
    isActive: false
  }

  provider = {
    isActive: false
  }
}
