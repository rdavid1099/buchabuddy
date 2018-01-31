import { Directive, forwardRef, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, NgModel, Validator } from "@angular/forms";

@Directive({
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidateEqual), multi: true },
  ],
  selector: "[validateEqual][formControl], [validateEqual][ngModel]",
})

export class ValidateEqual implements Validator {
  @Input("validateEqual") private firstInput: NgModel;

  public validate(c: FormControl) {
    return c.value === this.firstInput.value ? null : {
      validateEqual: {
        valid: false,
      },
    };
  }
}
