import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from '../components/header/header-component';
import FooterUiComponent from '../components/footer/footer.ui-component';
import { HeroComponent } from '../components/hero/hero.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterUiComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  value = 20;
  title = 'sreecodes-portfolio';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Access navigator here
      console.log('hi');

      navigator.geolocation.getCurrentPosition((position) => {
        console.log('Latitude: ', position.coords.latitude);
        console.log('Longitude: ', position.coords.longitude);
      });
    }
  }
}
