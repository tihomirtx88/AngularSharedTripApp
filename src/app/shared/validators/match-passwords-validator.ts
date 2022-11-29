import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordGroupValidator(controlName1: string, controlName2: string): ValidatorFn{
    return (control) => {
        const group = control as FormGroup;
        const control1 = group.get(controlName1);
        const control2 = group.get(controlName2);
        return control1?.value === control2?.value ? null : {matchPasswordGroupValidator: true};
    }

}