import { Routes } from '@angular/router';

export const routes: Routes = [
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
