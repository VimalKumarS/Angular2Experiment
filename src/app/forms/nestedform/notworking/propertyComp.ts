/*import {Component, View, SimpleChange, Input, Output, EventEmitter} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {FORM_DIRECTIVES, FormBuilder, Validators, NgFormModel} from 'angular2/common';
import {AddressComponent} from './addressComp';
@Component({
    selector: 'property',
    templateUrl: './propForm.html',
    directives: [FORM_DIRECTIVES, AddressComponent]
})

export class PropertyComponent {
    parentForm;
    parentGroup;
    name: string;
    contactname: string;

    constructor(fb: FormBuilder) {
        this.parentForm = new NgFormModel(null, null);
        this.parentGroup = fb.group({
            "name": ["", Validators.required],
            "contactname": ["", Validators.required]
        });
        this.parentForm.addControlGroup(this.parentGroup);
    }

    onSubmit(data) {
        console.log(data);
    }
}

bootstrap(PropertyComponent);*/