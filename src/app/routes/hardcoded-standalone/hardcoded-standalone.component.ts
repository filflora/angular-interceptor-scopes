import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hardcoded-standalone',
  standalone: true,
  imports: [],
  template: `
    <p>
      hardcoded-standalone works!
      <button (click)="sendRequest()">Send request</button>
    </p>
  `,
  styles: ``,
})
export class HardcodedStandaloneComponent {
  constructor(private httpClient: HttpClient) {}

  sendRequest() {
    console.log('Sending request from standalone AppComponent...');

    this.httpClient.get('https://swapi.dev/api/people/1').subscribe();
  }
}
