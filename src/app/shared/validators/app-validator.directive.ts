import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from './app-email-validators';

@Directive({
  selector: '[appAppValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AppValidatorDirective,
      multi: true
    }
  ]
})
export class AppValidatorDirective implements OnChanges, Validator{

  @Input() appAppValidator: string[] = [];

  validator!: ValidatorFn;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const appEmailChange = changes['appAppValidator']
    if (appEmailChange) {
      this.validator = emailValidator(appEmailChange.currentValue);
    }
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }
}
