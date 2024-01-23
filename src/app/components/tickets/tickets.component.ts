import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent {
  link: string =
    'https://eventfrog.ch/en/p/party/motto-party/royal-night-ein-kroenender-abschluss-7153714301936547717.html';
  copied: boolean = false;
  copyLink() {
    const textArea = document.createElement('textarea');
    textArea.value = this.link;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
