import { Component } from '@angular/core';
import { User } from 'library/projects/demo-lib/src/lib/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'web-app';

  user: User = {
    age: 43,
    name: 'John',
  };
}
