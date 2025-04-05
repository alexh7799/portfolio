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
  btnText: string = "project.button";
  projects = [
    { 
      id: 1, 
      title: 'project.project1.title', 
      text: [
        { 
          headline: 'About the project', 
          text: 'project.project1.about-project' 
        }, 
        { 
          headline: 'Technologies I have used', 
          text: 'JavaScript, HTML, CSS, Firebase' 
        }, 
        { 
          headline: 'What I have  learned', 
          text: 'project.project1.learning' 
        }
      ], 
      img: 'join-screenshot.svg',
      github: 'https://github.com/alexh7799/join_group_project', 
      livelink: 'https://join.Alexander-Hörst.de/' 
    },
    { 
      id: 2, 
      title: 'project.project2.title', 
      text: [
        { 
          headline: 'About the project', 
          text: 'project.project2.about-project' 
        }, 
        { 
          headline: 'Technologies I have used', 
          text: 'JavaScript, HTML, CSS, Rest API' 
        }, 
        { 
          headline: 'What I have  learned', 
          text: 'project.project2.learning' 
        }
      ], 
      img: 'pokedex.svg',
      github: 'https://github.com/alexh7799/pokedex', 
      livelink: 'https://pokedex.Alexander-Hörst.de/' 
    },
    { 
      id: 3, 
      title: 'project.project3.title', 
      text: [
        { 
          headline: 'About the project', 
          text: 'project.project3.about-project' 
        }, 
        { 
          headline: 'Technologies I have used', 
          text: 'JavaScript, HTML, CSS' 
        }, 
        { 
          headline: 'What I have  learned', 
          text: 'project.project3.learning' 
        }
      ], 
      img: 'dark-magic.svg',
      github: 'https://github.com/alexh7799/Dark-Magic', 
      livelink: 'https://join.Alexander-Hörst.de/' 
    }
  ]
}
