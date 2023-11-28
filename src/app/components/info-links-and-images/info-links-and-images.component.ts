import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ImageTitleAndUrl {
  image: string;
  url: string;
  title: string;
}

@Component({
  selector: 'app-info-links-and-images',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './info-links-and-images.component.html',
  styleUrls: ['./info-links-and-images.component.css'],
})
export class InfoLinksAndImagesComponent {
  infoLinksAndImages: ImageTitleAndUrl[] = [
    {
      image:
        'https://img.freepik.com/fotos-premium/musical-costuras-diferentes-instrumentos-objetos-musica-sonido_743855-6011.jpg',
      url: '#',
      title: 'Sientete libre con la música',
    },

    {
      image:
        'https://img.freepik.com/fotos-premium/musical-costuras-diferentes-instrumentos-objetos-musica-sonido_743855-6011.jpg',
      url: '#',
      title: 'Disfruta con la gente que tiene los mismos gustos que tú',
    },

    {
      image:
        'https://img.freepik.com/fotos-premium/musical-costuras-diferentes-instrumentos-objetos-musica-sonido_743855-6011.jpg',
      url: '#',
      title: 'Conecta con gente que te entiende',
    },
  ];
}
