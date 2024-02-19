import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lazyloaded-standalone',
  standalone: true,
  imports: [],
  template: `
    <p>
      lazyloaded-standalone works!
      <button (click)="sendRequest()">Send request</button>
    </p>
  `,
  styles: ``,
})
export class LazyloadedStandaloneComponent {
  constructor(private httpClient: HttpClient) {}

  sendRequest() {
    console.log('Sending request from standalone AppComponent...');

    this.httpClient.get('https://swapi.dev/api/people/1').subscribe();
  }
}
