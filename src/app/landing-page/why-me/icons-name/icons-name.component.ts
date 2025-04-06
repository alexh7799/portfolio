import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons-name',
  standalone: true,
  imports: [],
  templateUrl: './icons-name.component.html',
  styleUrl: './icons-name.component.scss'
})
export class IconsNameComponent {
  @Input() image: string = '';
  @Input() name: string = '';
}
