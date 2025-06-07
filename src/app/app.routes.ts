import { Routes } from '@angular/router';
import { BlogComponent } from '../components/blog/blog.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sc-app',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('../components/blog/blog.component').then((c) => c.BlogComponent),
  },
];
