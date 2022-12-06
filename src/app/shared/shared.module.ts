import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppValidatorDirective } from './validators/app-validator.directive';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    
  
    AppValidatorDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppValidatorDirective,
    LoaderComponent
  ]
})
export class SharedModule { }
