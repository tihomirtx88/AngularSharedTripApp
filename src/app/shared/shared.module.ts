import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { ShortedPipe } from './shorted.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    ShortedPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    ShortedPipe
  ]
})
export class SharedModule { }
