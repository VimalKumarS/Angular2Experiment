/*import {Component,  SimpleChange, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {bootstrap} from '@angular/platform/browser';
import { FormBuilder, Validators} from '@angular/forms';
import {PhoneComponent} from './phoneComponent';

@Component({
    selector: 'address',
    templateUrl: './addressForm.html',
    //directives: [FORM_DIRECTIVES, PhoneComponent],
    //viewproviders:[FormBuilder],
    inputs:['parentForm:paramForm']
})

export class AddressComponent implements OnInit {
    childForm: ControlGroup;
    parentForm: NgFormModel;

    constructor(fb: FormBuilder) {
      this.childForm = fb.group({
        "address1":["", Validators.required],
        "address2":["", Validators.required]
      })
    }
    
    ngOnInit(){
      this.parentForm.addControlGroup(this.childForm);
    }
}
//http://plnkr.co/edit/scq69cH3mjXrjFZn7pPp?p=preview
*/