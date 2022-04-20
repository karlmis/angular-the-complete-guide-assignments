import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serverContentInput', {static : true}) serverContentInput: ElementRef;
  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(newServerName: string) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: newServerName
      , serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(newServerName: string) {
    this.blueprintCreated.emit({
      serverName: newServerName
      , serverContent: this.serverContentInput.nativeElement.value
    });
  }


}
