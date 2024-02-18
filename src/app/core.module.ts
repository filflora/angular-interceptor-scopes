import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptorService } from './logger-interceptor.service';
import { AppComponent } from './app-standalone/app.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, AppComponent],
  declarations: [],
  // imports: [CommonModule, HttpClientModule],
  // declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: () => {
        const service = new LoggerInterceptorService();
        service.setInstanceName('Core module');

        console.log('LoggerInterceptorService instantiated in: Core module');

        return service;
      },
      multi: true,
    },
  ],
})
export class CoreModule {}
