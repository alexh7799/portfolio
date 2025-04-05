import { Component, Input } from '@angular/core';
import { ButtonsComponent } from "../../../../shared/buttons/buttons.component";
import { OuterlineButtonComponent } from "../../../../shared/outerline-button/outerline-button.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ButtonsComponent, OuterlineButtonComponent, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() item!: {id: number, title: string, text:any, img:string, github:string, livelink: string};
}
