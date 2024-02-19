import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eagerly-loaded-standalone',
  standalone: true,
  imports: [],
  template: `
    <p>
      eagerly-loaded-standalone works!
      <button (click)="sendRequest()">Send request</button>
    </p>
  `,
  styles: ``,
})
export class EagerlyLoadedStandaloneComponent {
  constructor(private httpClient: HttpClient) {}

  sendRequest() {
    console.log('Sending request from standalone AppComponent...');

    this.httpClient.get('https://swapi.dev/api/people/1').subscribe();
  }
}
