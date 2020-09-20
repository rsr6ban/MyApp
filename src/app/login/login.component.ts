import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }
  senddata(_uname,_Passw)
  {
alert(_uname)
alert(_Passw)
  }

}
