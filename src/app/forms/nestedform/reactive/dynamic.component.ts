import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
//import { Customer } from './customer.interface';

export interface Customer {
    name: string;
    addresses: Address[];
}

export interface Address {
    street: string;
    postcode: string;
}

@Component({
  moduleId: module.id,
  selector: 'dynamic-app',
  templateUrl: 'dynamic.component.html',
})
export class DynamicFormAppComponent implements OnInit {
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    }

    initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addAddress() {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }

    save(model: Customer) {
        // call API to save
        // ...
        console.log(model);
    }
}

//http://plnkr.co/edit/VNtTrQvyhLFFr5WTPjYp?p=preview