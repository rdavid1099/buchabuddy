import { Directive, forwardRef } from "@angular/core";
import { FormControl, NG_VALIDATORS } from "@angular/forms";

function validateLowercaseFactory() {
  return (c: FormControl) => {
    const PATTERN = /[a-z]/;

    return PATTERN.test(c.value) || c.value === "" ? null : {
      validateLowercaseLetter: {
        valid: false,
      },
    };
  };
}

@Directive({
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidateLowercaseLetter), multi: true },
  ],
  selector: "[validateLowercaseLetter][ngModel], [validateLowercaseLetter][formControl]",
})

export class ValidateLowercaseLetter {
  public validator: (c: FormControl) => any;

  constructor() {
    this.validator = validateLowercaseFactory();
  }

  public validate(c: FormControl) {
    return this.validator(c);
  }
}
