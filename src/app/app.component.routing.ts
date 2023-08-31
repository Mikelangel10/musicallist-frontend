import { Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ConnectionsComponent } from './pages/connections/connections.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
  },
  {
    path: 'usuario',
    loadComponent: () =>
      import('../app/pages/user-profile/user-profile.component').then(
        (c) => c.UserProfileComponent
      ),
  },
  {
    path: 'favoritos',
    loadComponent: () =>
      import('../app/pages/favorites/favorites.component').then(
        (c) => c.FavoritesComponent
      ),
  },
  {
    path: 'conexiones',
    loadComponent: () =>
      import('../app/pages/connections/connections.component').then(
        (c) => c.ConnectionsComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
