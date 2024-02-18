import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lazy-loaded-component',
  standalone: true,
  imports: [RouterOutlet],
  template: `Lazy loaded component:
    <button (click)="sendRequest()">Send request</button> `,
  styles: ':host { display: block; }',
})
export class LazyLoadedComponent {
  constructor(private httpClient: HttpClient) {}

  sendRequest() {
    console.log('Sending request from LazyLoadedComponent...');

    this.httpClient.get('https://swapi.dev/api/people/1').subscribe();
  }
}
