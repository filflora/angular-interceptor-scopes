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
    }

    <ul>
      <li routerLink="/eagerly-loaded-module">Eagerly loaded module</li>
      <li routerLink="/eagerly-loaded-standalone">Eagerly loaded standalone</li>
      <li routerLink="/lazyloaded-module">Lazy loaded module</li>
      <li routerLink="/lazyloaded-standalone">Lazy loaded standalone</li>
    </ul>

    <p>Router outlet:</p>
    <router-outlet />`,
  styles: ``,
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {}

  sendRequest() {
    console.log('Sending request from module AppComponent...');

    this.httpClient.get('https://swapi.dev/api/people/1').subscribe();
  }
}
