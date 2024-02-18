import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggerInterceptorService implements HttpInterceptor {
  name = '';

  setInstanceName(name: string) {
    this.name = name;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(`[${this.name}] Request intercepted to: ${request.url}`);

    return next.handle(request);
  }
}
