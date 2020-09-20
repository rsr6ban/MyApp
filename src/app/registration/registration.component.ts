import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  senddata(_name,_mail,_loca,_pin,_uname,_Passw)
  {
    alert(_name)
    alert(_mail)
alert(_loca)
alert(_pin)
alert(_uname)
alert(_Passw)
  }
}
