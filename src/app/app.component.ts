import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from '../components/header/header-component';
import FooterUiComponent from '../components/footer/footer.ui-component';
import { HeroComponent } from '../components/hero/hero.component';
import { isPlatformBrowser } from '@angular/common';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterUiComponent, HeroComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
}
