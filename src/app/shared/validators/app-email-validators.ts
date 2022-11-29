import { ValidatorFn } from"@angular/forms";

export function emailValidator(domain: string[]): ValidatorFn{
    const domainString = domain.join('|');
    const  reEx = new RegExp(`^[^@]{6,}@gmail\.(${domainString})$`);
    // const  reEx = new RegExp(`^[^^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$`);
    // ^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$
    return (control) => {       
        return (control.value === `` || reEx.test(control.value)) ? null : { emailValidator: true };
    }
}