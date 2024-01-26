import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  images = [
    'https://firebasestorage.googleapis.com/v0/b/rana-maturaball.appspot.com/o/Company%20logos%2FPlatzhalter-Logo.jpg?alt=media&token=b2e946f4-d786-44dc-a441-a9114e4ed2c0',
    'https://firebasestorage.googleapis.com/v0/b/rana-maturaball.appspot.com/o/Company%20logos%2Ffirmen-logo-platzhalter.png?alt=media&token=6291dd4f-37c0-489b-9909-d804f2a84ec6',
    'https://firebasestorage.googleapis.com/v0/b/rana-maturaball.appspot.com/o/Company%20logos%2Ffirmen-logo-platzhalter.png?alt=media&token=6291dd4f-37c0-489b-9909-d804f2a84ec6',
    'https://firebasestorage.googleapis.com/v0/b/rana-maturaball.appspot.com/o/Company%20logos%2Ffirmen-logo-platzhalter.png?alt=media&token=6291dd4f-37c0-489b-9909-d804f2a84ec6',
    'https://gifhorn-live.de/wp-content/uploads/2017/03/sponsor-logo-platzhalter.png',
  ];
  email: string = 'maturaballok24@gmail.com';
  constructor() {
    // Verdoppeln der Bilder für eine nahtlose Schleife
    this.images = [...this.images, ...this.images];
  }
}
