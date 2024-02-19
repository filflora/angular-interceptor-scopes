import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lazyloaded-module',
  template: `
    <p>
      lazyloaded-module works!
      <button (click)="sendRequest()">Send request</button>
    </p>
  `,
  styles: ``,
})
export class LazyloadedModuleComponent {
  constructor(private httpClient: HttpClient) {}

  sendRequest() {
    console.log('Sending request from standalone AppComponent...');

    this.httpClient.get('https://swapi.dev/api/people/1').subscribe();
  }
}
