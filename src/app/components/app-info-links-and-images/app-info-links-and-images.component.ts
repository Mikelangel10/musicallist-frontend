import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ImageTitleAndUrl {
  image: string;
  url: string;
  title: string;
}

@Component({
  selector: 'app-app-info-links-and-images',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './app-info-links-and-images.component.html',
  styleUrls: ['./app-info-links-and-images.component.css'],
})
export class AppInfoLinksAndImagesComponent {
  appInfoLinksAndImages: ImageTitleAndUrl[] = [
    {
      image: 'https://media.timeout.com/images/103644012/image.jpg',
      url: '#',
      title: 'Sientete libre con la música',
    },

    {
      image: 'https://media.timeout.com/images/103644012/image.jpg',
      url: '#',
      title: 'Disfruta con la gente que tiene los mismos gustos que tú',
    },

    {
      image: 'https://media.timeout.com/images/103644012/image.jpg',
      url: '#',
      title: 'Conecta con gente que te entiende',
    },
  ];
}
