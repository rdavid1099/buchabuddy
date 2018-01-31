import { Directive, forwardRef } from "@angular/core";
import { FormControl, NG_VALIDATORS } from "@angular/forms";

function validateEmailFactory() {
  return (c: FormControl) => {
    const PATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return PATTERN.test(c.value) || c.value === "" ? null : {
      validateEmail: {
        valid: false,
      },
    };
  };
}

@Directive({
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidateEmail), multi: true },
  ],
  selector: "[validateEmail][ngModel], [validateEmail][formControl]",
})

export class ValidateEmail {
  public validator: (c: FormControl) => any;

  constructor() {
    this.validator = validateEmailFactory();
  }

  public validate(c: FormControl) {
    return this.validator(c);
  }
}
