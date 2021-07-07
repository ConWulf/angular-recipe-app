import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() linkEvent : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  select(link : string) : void {
    this.linkEvent.emit(link);
}

}
