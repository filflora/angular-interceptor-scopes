import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `Module based App component:
    <button (click)="sendRequest()">Send request</button>

    @defer (on interaction) {
    <app-lazy-loaded-component />
    } @placeholder {
    <div>Click me to load component.</div>
    } `,
  styles: ``,
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {}

  sendRequest() {
    console.log('Sending request from module AppComponent...');

    this.httpClient.get('https://swapi.dev/api/people/1').subscribe();
  }
}
