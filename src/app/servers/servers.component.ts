import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //for giving as attribute to html default tag
 // selector:'[app-servers]',
  selector:'.app-servers',
  template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
