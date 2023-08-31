import { Component } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { RouterOutlet } from '@angular/router';
=======
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
>>>>>>> main
=======
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
>>>>>>> 13c68b2 (U - Standalone Routes User-Profile, Favoritos, Conexiones)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
<<<<<<< HEAD
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
=======
  imports: [FooterComponent, HeaderComponent],
>>>>>>> 13c68b2 (U - Standalone Routes User-Profile, Favoritos, Conexiones)
})
export class AppComponent {
  title = 'Musicallist';
  name = 'Miguel';
}
