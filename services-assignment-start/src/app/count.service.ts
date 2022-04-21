import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  toActive = 0;
  toInActive = 0;

  constructor() {
  }

  anExtraActive() {
    this.toActive++;
    console.log('active', this.toActive);
  }

  anExtraInActive() {
    this.toInActive++;
    console.log('inActive', this.toInActive);
  }

}
