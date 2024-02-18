import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CoreModule } from '../core.module';
import { LazyLoadedComponent } from '../lazy-loaded-component.component';
import { LoggerInterceptorService } from '../logger-interceptor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, LazyLoadedComponent, CoreModule],
  // imports: [RouterModule, RouterOutlet, LazyLoadedComponent, HttpClientModule],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useFactory: () => {
  //       const service = new LoggerInterceptorService();
  //       service.setInstanceName('Standalone App component');

  //       console.log(
  //         'LoggerInterceptorService instantiated in: Standalone App component'
  //       );

  //       return service;
  //     },
  //     multi: true,
  //   },
  // ],
  template: `Standalone App component:
    <button (click)="sendRequest()">Send request</button>

    @defer (on interaction) {
    <app-lazy-loaded-component />
    } @placeholder {
    <div>Click me to load component.</div>
    }

    <ul>
      <li routerLink="/hardcoded-module">Hardcoded module</li>
      <li routerLink="/hardcoded-standalone">Hardcoded standalone</li>
      <li routerLink="/lazyloaded-module">Lazy loaded module</li>
      <li routerLink="/lazyloaded-standalone">Lazy loaded standalone</li>
    </ul>

    <p>Router outlet:</p>
    <router-outlet />`,
  styles: '',
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {}

  sendRequest() {
    console.log('Sending request from standalone AppComponent...');

    this.httpClient.get('https://swapi.dev/api/people/1').subscribe();
  }
}
