import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appsignal-issue465';
  // Intentional TS error
  brokenValue: boolean = 'string';
}
