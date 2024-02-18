import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LazyLoadedComponent } from '../lazy-loaded-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoggerInterceptorService } from '../logger-interceptor.service';
import { CoreModule } from '../core.module';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    LazyLoadedComponent,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // CoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: () => {
        const service = new LoggerInterceptorService();
        service.setInstanceName('App Module');

        console.log('LoggerInterceptorService instantiated in: App Module');

        return service;
      },
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
