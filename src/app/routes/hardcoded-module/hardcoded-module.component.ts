import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hardcoded-module',
  template: `
    <p>
      hardcoded-module works!
      <button (click)="sendRequest()">Send request</button>
    </p>
  `,
  styles: ``,
})
export class HardcodedModuleComponent {
  constructor(private httpClient: HttpClient) {}

  sendRequest() {
    console.log('Sending request from standalone AppComponent...');

    this.httpClient.get('https://swapi.dev/api/people/1').subscribe();
  }
}
