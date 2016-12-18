/*import {Component} from "@angular/core";
import {Control, Validators} from "@angular/forms";
import {IValidationResult} from "./models";

export class YearValidator {
    static isValidYear(control: Control): IValidationResult {
        let n = Number(control.value);

        if ((isNaN(n)) ||
            ((n !== 0) && ((n < 1000) || (n > new Date().getFullYear())))) {
            return {
                "isValidYear": true
            };
        }

        return null;
    }
}

export class LemmaValidator {
    static isValidLemma(control: Control): IValidationResult {
        // do not trigger error if empty, this the job of the required validator
        if (!control.value) {
            return null;
        }
        if (typeof(control.value) !== "string") {
            return {
                "isValidLemma": true
            };
        }

        let s = <string> control.value;
        if (!s.match(/^[a-zA-Z0-9' \-]*[a-zA-Z][a-zA-Z0-9' \-]*$/)) {
            return {
                "isValidLemma": true
            };
        }
        return null;
    }
}
*/