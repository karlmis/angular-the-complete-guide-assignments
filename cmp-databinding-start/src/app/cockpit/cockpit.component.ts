import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(newServerName: string, newServerContent: string) {
    this.serverCreated.emit({
      serverName: newServerName
      , serverContent: newServerContent
    });
  }

  onAddBlueprint(newServerName: string, newServerContent: string) {
    this.blueprintCreated.emit({
      serverName: newServerName
      , serverContent: newServerContent
    });
  }


}
