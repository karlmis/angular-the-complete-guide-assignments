import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsVisible = true;
  clickTimes: number[] = [];
  nrOfTimesClicked = 0;

  changeDetailsVisible() {
    this.detailsVisible = !this.detailsVisible;
    this.clickTimes.push(++this.nrOfTimesClicked);
  }
}
