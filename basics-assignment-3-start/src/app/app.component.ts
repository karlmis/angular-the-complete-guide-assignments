import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsVisible = true;
  clickTimes: Date[] = [];


  changeDetailsVisible() {
    this.detailsVisible = !this.detailsVisible;
    this.clickTimes.push(new Date());
  }
}
