import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import HeaderComponent from '../components/header/header-component';
import FooterUiComponent from '../components/footer/footer.ui-component';
import { HeroComponent } from '../components/hero/hero.component';
import { isPlatformBrowser } from '@angular/common';
import { ContactComponent } from '../components/contact/contact.component';
import { MainRoute } from './main-route';
import { filter } from 'rxjs';
import { BlogComponent } from '../components/blog/blog.component';
import { Analytics } from '@vercel/analytics/react';
import { inject } from '@vercel/analytics';
inject({
  debug: false,
});
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterUiComponent, HeroComponent, ContactComponent, MainRoute, BlogComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

  isNotBlogRoute: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Hide header/footer on the '/blog' route
        this.isNotBlogRoute = event.url !== '/blog';
      });
  }
  
}
