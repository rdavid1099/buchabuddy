import { Directive, forwardRef } from "@angular/core";
import { FormControl, NG_VALIDATORS } from "@angular/forms";

function validateUppercaseFactory() {
  return (c: FormControl) => {
    const PATTERN = /[A-Z]/;

    return PATTERN.test(c.value) || c.value === "" ? null : {
      validateUppercaseLetter: {
        valid: false,
      },
    };
  };
}

@Directive({
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidateUppercaseLetter), multi: true },
  ],
  selector: "[validateUppercaseLetter][ngModel], [validateUppercaseLetter][formControl]",
})

export class ValidateUppercaseLetter {
  public validator: (c: FormControl) => any;

  constructor() {
    this.validator = validateUppercaseFactory();
  }

  public validate(c: FormControl) {
    return this.validator(c);
  }
}
