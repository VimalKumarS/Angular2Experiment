import { Component, Output, EventEmitter, Input } from '@angular/core';
import {  
  FormBuilder,  
  FormGroup } from '@angular/forms'


@Component({
  selector: 'child-form-component',
  template: ` 
  <form [formGroup]="myForm" >
  <div>
    <div>
      <label>Street:</label>
      <input type="text" [formControl]="myForm.controls['street']">
    </div>
    <div>
      <label>Zip:</label>
      <input type="text"  [formControl]="myForm.controls['zip']">
    </div>
    <div>
      <label>City:</label>
      <input type="text"  [formControl]="myForm.controls['city']">
    </div>
  </div>
   </form>`
})

export class childFormComponent{
  @Output() formUpdate = new EventEmitter();
  myForm: FormGroup;
   
  constructor(fb: FormBuilder) {  
    this.myForm = fb.group({  
      'street': [''],
      'zip': [''],
      'city': ['']  
       
    });  
    this.myForm.valueChanges.subscribe((data) => {
      this.formUpdate.emit(data);;
    });
  }

}

@Component({
  selector: 'form-component',
  //directives:[childFormComponent,REACTIVE_FORM_DIRECTIVES],
  providers: [FormBuilder],
  template: `
    <form #form="ngForm" (ngSubmit)="submit(form.value)">
      <div ngModelGroup="name" #mgName="ngModelGroup">
        <div>
          <label>Firstname:</label>
          <input type="text" name="firstname" ngModel>
        </div>
        <div>
          <label>Lastname:</label>
          <input type="text" name="lastname" ngModel>
        </div>
      </div>

     <child-form-component (formUpdate)="formUpdated($event)"></child-form-component>
    
      <button type="submit">Submit</button>
    </form>

    <pre>
{{form.value | json}}
    </pre>
    
    <h4>Submitted</h4>
    <pre>    
{{value | json }}
    </pre>
  `
})
export class FormComponent {
  
  value: any = {};
  formUpdated(event){
    Object.assign(this.value, {adress: event});
  }
  submit(form) {
    // this.value = form;
    Object.assign(this.value, form);
    console.log(this.value);
  }
}

//https://plnkr.co/edit/nEkNxrb4n8XuaDeRUM6f?p=preview