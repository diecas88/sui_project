import { AbstractControl } from '@angular/forms';

export class MyValidators {

    static isPhoneValid(control: AbstractControl) {
        const value = control.value;
        if (value < 3000000001 || value.length !== 10 ) {
            return { price_invalid: true };
        }
        return null;
    }
}