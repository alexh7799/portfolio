import { Component } from '@angular/core';
import { ArrowComponent } from '../../shared/arrow/arrow.component';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../../shared/buttons/buttons.component";
import { IconsSkillComponent } from './icons-skill/icons-skill.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ArrowComponent, IconsSkillComponent, CommonModule, ButtonsComponent, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  btnText: string = "skill.button";
  icon = [
    {image: 'angular.svg', name: 'Angular'},
    {image: 'typescript.svg', name: 'TypeScript'},
    {image: 'javascript.svg', name: 'JavaScript'},
    {image: 'html5.svg', name: 'HTML'},
    {image: 'css3.svg', name: 'CSS'},
    {image: 'rest-api.svg', name: 'Rest-Api'},
    {image: 'firebase.svg', name: 'Firebase'},
    {image: 'git.svg', name: 'Git'},
    {image: 'scrum.svg', name: 'Scrum'},
    {image: 'material-design.svg', name: 'Material Design'},
    {image: 'challenge.svg', name: 'skill.skillIcon'}
  ]

  constructor() {}
}