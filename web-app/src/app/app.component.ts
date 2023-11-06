import { Component } from '@angular/core';
import { User, max } from '@thomastrepanier/demo-library/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'web-app';

  john: User = {
    age: 45,
    name: 'John v2.0.0',
  };

  alice: User = {
    age: 50,
    name: 'Alice',
  };

  constructor() {
    console.log('AppComponent constructor');
    console.log(max(1, 2));
  }

  get oldestUser(): number | undefined {
    return max(this.john.age, this.alice.age);
  }
}
