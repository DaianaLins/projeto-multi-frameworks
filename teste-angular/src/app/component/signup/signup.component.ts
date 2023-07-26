import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  body = "body";
  container = "container";
  email = "email";
  emailInput = "emailInput";
  email_l: string = '';
  nome: string = '';
  password: string = '';
  showErr:boolean = false;
  showErrAut:boolean = false;

  signup(){

  }

}
