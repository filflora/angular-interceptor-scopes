import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadedModuleComponent } from './lazyloaded-module.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../../core.module';

@NgModule({
  declarations: [LazyloadedModuleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    // CoreModule,
    RouterModule.forChild([{ path: '', component: LazyloadedModuleComponent }]),
  ],
})
export class LazyloadedModuleModule {}
