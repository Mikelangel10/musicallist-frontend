import { Component } from '@angular/core';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    FavoritesComponent,
    ConnectionsComponent,
    UserProfileComponent,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
  ],
})
export class AppComponent {}
