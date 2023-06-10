import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  activeForm:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  signInShow(): void{
    this.activeForm = ''
  }
  siginUpShow(): void{
    this.activeForm = 'right-panel-active';
  }

}
