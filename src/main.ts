import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app-module/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app-module/app.module';
import { AppComponent } from './app/app-standalone/app.component';

// NOTE: STANDALONE AppComponent initialization
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// NOTE: Module based AppComponent initialization
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
