import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppInfoLinksAndImagesComponent } from 'src/app/components/app-info-links-and-images/app-info-links-and-images.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterLink, AppInfoLinksAndImagesComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {}
