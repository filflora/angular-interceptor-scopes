import { Routes } from '@angular/router';
import { EagerlyLoadedModuleComponent } from './routes/eagerly-loaded-module/eagerly-loaded-module.component';
import { EagerlyLoadedStandaloneComponent } from './routes/eagerly-loaded-standalone/eagerly-loaded-standalone.component';

export const routes: Routes = [
  {
    path: 'eagerly-loaded-module',
    component: EagerlyLoadedModuleComponent,
  },
  {
    path: 'eagerly-loaded-standalone',
    component: EagerlyLoadedStandaloneComponent,
  },
  {
    path: 'lazyloaded-module',
    loadChildren: () =>
      import('./routes/lazy-loaded-module/lazyloaded-module.module').then(
        (m) => m.LazyloadedModuleModule
      ),
  },
  {
    path: 'lazyloaded-standalone',
    loadComponent: () =>
      import(
        './routes/lazy-loaded-standalone/lazyloaded-standalone.component'
      ).then((m) => m.LazyloadedStandaloneComponent),
  },
];
