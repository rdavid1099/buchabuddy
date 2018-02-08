import { Directive, forwardRef, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidatePattern), multi: true },
  ],
  selector: "[validatePattern][formControl], [validatePattern][ngModel]",
})

export class ValidatePattern implements Validator {
  @Input("validatePattern") private input: string;

  public validate(c: FormControl) {
    const PATTERN = new RegExp(this.input, "g");
    if (c.value) {
      return !c.value.match(PATTERN) ? null : {
        validatePattern: {
          valid: false,
        },
      };
    } else {
      return null;
    }
  }
}
