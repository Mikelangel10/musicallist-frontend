import { Component } from '@angular/core';
<<<<<<< HEAD
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { RouterOutlet } from '@angular/router';
=======
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
>>>>>>> main

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
<<<<<<< HEAD
  imports: [
    FavoritesComponent,
    ConnectionsComponent,
    UserProfileComponent,
    RouterOutlet,
  ],
=======
  imports: [FooterComponent, HeaderComponent],
>>>>>>> main
})
export class AppComponent {
  title = 'Musicallist';
  name = 'Miguel';
}
