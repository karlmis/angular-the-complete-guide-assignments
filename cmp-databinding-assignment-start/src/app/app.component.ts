import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number [] = [];
  evenNumbers: number [] = [];

  handleEvent(event: number) {
    if (event % 2 === 1) {
      this.oddNumbers.push(event);
    } else {
      this.evenNumbers.push(event);
    }
  }
}
