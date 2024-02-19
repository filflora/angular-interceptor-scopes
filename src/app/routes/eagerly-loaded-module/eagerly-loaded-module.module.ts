import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerlyLoadedModuleComponent } from './eagerly-loaded-module.component';

@NgModule({
  declarations: [EagerlyLoadedModuleComponent],
  imports: [CommonModule],
})
export class EagerlyLoadedModuleModule {}
