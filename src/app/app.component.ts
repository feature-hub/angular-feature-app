import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  @Input() title = 'World';
}
