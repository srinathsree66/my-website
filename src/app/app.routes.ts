import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sc-app',
    pathMatch: 'full',
  },

  {
    path: 'sc-about',
    loadComponent: () => import('../components/about/about.component'),
  },
];
