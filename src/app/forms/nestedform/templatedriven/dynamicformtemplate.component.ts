import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
//impor[t { Customer } from './customer.interface';
import { MissionService} from './CommunicationService';
 
export class Customer {
    name: string;
    addresses: Address[];
}

export class Address {
    street: string;
    postcode: string;
    constructor(s,p){
        this.postcode=p;
        this.street=s;
    }

    public equals(prev:Address): boolean{
            if(this.postcode==prev.postcode && this.street ==this.street){
                return true;
            }
            else{
                return false;
            }
    }
}

@Component({
  moduleId: module.id,
  selector: 'dynamic-app-template',
  templateUrl: 'dynamicformtemplate.component.html',
})
export class templateFormAppComponent implements OnInit {
    public myForm: FormGroup;

     customer: Customer = {
    name: '',
    addresses: [ new Address('s1','p1'), new Address('s1','p1') ]
   
  };

   constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        console.log(astronaut);
      });
  }

    ngOnInit() {
       
    }

    initAddress() {
       
    }

    addAddress() {
      
    }

    removeAddress(i: number) {
     
    }

    save(model: Customer) {
        // call API to save
        // ...
        console.log(model);
    }

    formUpdate($event){
        console.log($event)
    }
}