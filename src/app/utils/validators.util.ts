import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function passwordMatchValidator() : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
        const password = control.get('password');
        const retypePassword = control.get('retype_password');

        if(password && retypePassword && password.value !== retypePassword.value) {
            return { passwordMismatch: true };
        }

        return null;
    };
}

