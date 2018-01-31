import { Directive, forwardRef } from "@angular/core";
import { FormControl, NG_VALIDATORS } from "@angular/forms";

function validateNumberFactory() {
  return (c: FormControl) => {
    const PATTERN = /[0-9]/;

    return PATTERN.test(c.value) || c.value === "" ? null : {
      validateNumber: {
        valid: false,
      },
    };
  };
}

@Directive({
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidateNumber), multi: true },
  ],
  selector: "[validateNumber][ngModel], [validateNumber][formControl]",
})

export class ValidateNumber {
  public validator: (c: FormControl) => any;

  constructor() {
    this.validator = validateNumberFactory();
  }

  public validate(c: FormControl) {
    return this.validator(c);
  }
}
