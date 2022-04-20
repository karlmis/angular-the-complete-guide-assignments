import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() nrEvent = new EventEmitter<Number>();
  private nr = 0;
  private myInterval;

  constructor() {
  }

  ngOnInit(): void {
  }

  start() {
    this.myInterval = setInterval(() => {
      this.nrEvent.emit(this.nr++);
    }, 1000);
  }

  end() {
    clearInterval(this.myInterval);
  }
}
