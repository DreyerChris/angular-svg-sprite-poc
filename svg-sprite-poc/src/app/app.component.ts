import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'svg-sprite-poc';
  iconName: string = 'notification';
  size: string = '50px';
  color: string = 'black';
}
