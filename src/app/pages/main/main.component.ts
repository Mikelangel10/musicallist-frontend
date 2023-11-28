import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InfoLinksAndImagesComponent } from 'src/app/components/info-links-and-images/info-links-and-images.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterLink, InfoLinksAndImagesComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {}
