import { Component } from '@angular/core';
//import { User } from './signup.interface';
//https://plnkr.co/edit/oicEbx5HQj3T208GCuU7?p=preview
//http://blog.thoughtram.io/angular/2016/03/21/template-driven-forms-in-angular-2.html
//http://embed.plnkr.co/LLf7Il/
//http://embed.plnkr.co/XgRYoe/
//http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  }
}


@Component({
  selector: 'signup-form',
  template: `
    <form novalidate #f="ngForm" (ngSubmit)="onSubmit(f)">
      <label>
        <span>Full name</span>
        <input
          type="text"
          placeholder="Your full name"
          name="name"
          ngModel
          #userName="ngModel"
          minlength="2"
          required>
      </label>
      <div *ngIf="userName.errors?.required && userName.touched" class="error">
        Name is required
       </div>
       <div *ngIf="userName.errors?.minlength && userName.touched" class="error">
        Minimum of 2 characters
       </div>
      <div ngModelGroup="account" #userAccount="ngModelGroup">
        <label>
          <span>Email address</span>
          <input
            type="email"
            placeholder="Your email address"
            name="email"
            ngModel
            #userEmail="ngModel"
            required>
        </label>
        <label>
          <span>Confirm address</span>
          <input
            type="email"
            placeholder="Confirm your email address"
            name="confirm"
            ngModel
            #userConfirm="ngModel"
            required>
        </label>
        <div *ngIf="userAccount.invalid && userAccount.touched" class="error">
          Both emails are required
        </div>
      </div>
      <button type="button" (click)="onSubmit(f)">Sign up</button>

    </form>
  `
})
export class SignupFormComponent {
  user: User = {
    name: '',
    account: {
      email: '',
      confirm: ''
    }
  };
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}
// [disabled]="!f.invalid"