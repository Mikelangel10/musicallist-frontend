import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/pages/main/main.component').then((c) => c.MainComponent),
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('../app/pages/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../app/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
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
