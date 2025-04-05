import { Component, Input } from '@angular/core';
import { ButtonsComponent } from "../../../../shared/buttons/buttons.component";
import { OuterlineButtonComponent } from "../../../../shared/outerline-button/outerline-button.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-mobile',
  standalone: true,
  imports: [ButtonsComponent, OuterlineButtonComponent, TranslateModule],
  templateUrl: './project-mobile.component.html',
  styleUrl: './project-mobile.component.scss'
})

export class ProjectMobileComponent {
  isShowMore = false;

  @Input() item!: {id: number, title: string, text:any, img:string, github:string, livelink: string};

  constructor() {}

  showMore() {
    this.isShowMore = true;
  }

  showLess() {
    this.isShowMore = false;
  }

}