import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppValidatorDirective } from './validators/app-validator.directive';

@NgModule({
  declarations: [
    
  
    AppValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppValidatorDirective
  ]
})
export class SharedModule { }
