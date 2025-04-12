import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavDesktopComponent } from './shared/nav/nav-desktop/nav-desktop.component';
import { NavMobileComponent } from './shared/nav/nav-mobile/nav-mobile.component';
import { FooterMobileComponent } from './shared/footer/footer-mobile/footer-mobile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavDesktopComponent, NavMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
