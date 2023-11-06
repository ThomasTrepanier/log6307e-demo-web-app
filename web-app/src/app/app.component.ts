import { Component } from '@angular/core';
import { User, max } from '@thomastrepanier/demo-library/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'web-app';

  user: User = {
    age: 45,
    name: 'John v2.0.0',
  };

  constructor() {
    console.log('AppComponent constructor');
    console.log(max(1, 2));
  }
}
