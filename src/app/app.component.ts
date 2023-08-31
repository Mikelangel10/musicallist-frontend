import { Component } from '@angular/core';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { RouterOutlet } from '@angular/router';

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
  ],
})
export class AppComponent {
  title = 'Musicallist';
  name = 'Miguel';
}
