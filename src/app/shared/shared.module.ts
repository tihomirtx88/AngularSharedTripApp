import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppValidatorDirective } from './validators/app-validator.directive';
import { LoaderComponent } from './loader/loader.component';
import { ShortedPipe } from './shorted.pipe';

@NgModule({
  declarations: [
    
  
    AppValidatorDirective,
    LoaderComponent,
    ShortedPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppValidatorDirective,
    LoaderComponent,
    ShortedPipe
  ]
})
export class SharedModule { }
