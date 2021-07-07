import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  showCurrent : boolean = true;

  showList(e : string) {
    this.showCurrent = e === 'recipe';
  }
}
