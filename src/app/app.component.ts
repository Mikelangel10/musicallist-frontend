import { Component } from '@angular/core';
<<<<<<< HEAD
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
=======
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { RouterOutlet } from '@angular/router';
>>>>>>> d0df7a5 (U - Standalone Routes User-Profile, Favoritos, Conexiones)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
<<<<<<< HEAD
  imports: [FooterComponent, HeaderComponent],
=======
  imports: [
    FavoritesComponent,
    ConnectionsComponent,
    UserProfileComponent,
    RouterOutlet,
  ],
>>>>>>> d0df7a5 (U - Standalone Routes User-Profile, Favoritos, Conexiones)
})
export class AppComponent {
  title = 'Musicallist';
  name = 'Miguel';
}
