import { Routes } from '@angular/router';
import { HardcodedModuleComponent } from './routes/hardcoded-module/hardcoded-module.component';
import { HardcodedStandaloneComponent } from './routes/hardcoded-standalone/hardcoded-standalone.component';

export const routes: Routes = [
  {
    path: 'hardcoded-module',
    component: HardcodedModuleComponent,
  },
  {
    path: 'hardcoded-standalone',
    component: HardcodedStandaloneComponent,
  },
  {
    path: 'lazyloaded-module',
    loadChildren: () =>
      import('./routes/lazyloaded-module/lazyloaded-module.module').then(
        (m) => m.LazyloadedModuleModule
      ),
  },
  {
    path: 'lazyloaded-standalone',
    loadComponent: () =>
      import(
        './routes/lazyloaded-standalone/lazyloaded-standalone.component'
      ).then((m) => m.LazyloadedStandaloneComponent),
  },
];
