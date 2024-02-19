import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptorService } from './logger-interceptor.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
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
