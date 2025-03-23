import { Component } from '@angular/core';
import { ArrowComponent } from '../../shared/arrow/arrow.component';
import { ProjectComponent } from "./project/project-desktop/project.component";
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../../shared/buttons/buttons.component";
import { TranslateModule } from '@ngx-translate/core';
import { ProjectMobileComponent } from './project/project-mobile/project-mobile.component';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ArrowComponent, ProjectMobileComponent, ProjectComponent, CommonModule, ButtonsComponent, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  btnText: string = "Let's talk";
  projects = [
    { 
      id: 1, 
      title: 'Projekt Join', 
      text: [
        { 
          headline: 'About the project', 
          text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.' 
        }, 
        { 
          headline: 'Technologies I have used', 
          text: 'JavaScript, HTML, CSS, Firebase' 
        }, 
        { 
          headline: 'What I have  learned', 
          text: 'Maybe you used a certain technology for the first time? Have you learnt more about how to keep your code clean or how to organise the components in your projects?' 
        }
      ], 
      img: 'join-screenshot.svg',
      github: '', 
      livelink: '' 
    },
    { 
      id: 2, 
      title: 'Project Pokedex', 
      text: [
        { 
          headline: 'About the project', 
          text: '' 
        }, 
        { 
          headline: 'Technologies I have used', 
          text: '' 
        }, 
        { 
          headline: 'What I have  learned', 
          text: '' 
        }
      ], 
      img: 'pokedex.svg',
      github: '', 
      livelink: '' 
    },
    { 
      id: 3, 
      title: 'Project Dark Magic', 
      text: [
        { 
          headline: 'About the project', 
          text: '' 
        }, 
        { 
          headline: 'Technologies I have used', 
          text: '' 
        }, 
        { 
          headline: 'What I have  learned', 
          text: '' 
        }
      ], 
      img: 'dark-magic.svg',
      github: '', 
      livelink: '' 
    }
  ]
}
