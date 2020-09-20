import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindig',
  templateUrl: './databindig.component.html',
  styleUrls: ['./databindig.component.css']
})
export class DatabindigComponent implements OnInit {
  mydata = 'hello'
  iplteams = ["Chennai", "Mumbai", "RCB"]
  flag: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.flag = !this.flag   
  }
}
