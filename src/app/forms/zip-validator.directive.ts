import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appZipValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ZipValidatorDirective, multi: true }]
})
export class ZipValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl) {
    const elementValue = control.value;
    if (elementValue === null || elementValue === undefined || elementValue === '') {
      return { 'cus_req': 'Field is required' };
    }

    const regex = new RegExp('^[0-9]{5}$');
    if (!regex.test(elementValue)) {
      return { 'cus_pattern': 'Value should be at least 5 digit number' }
    }

    return null;
  }

}
