import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //for giving as attribute to html default tag
 // selector:'[app-servers]',
  selector:'.app-servers',
 // template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
 templateUrl:'./servers.component.html', 
 styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'ServerName is';
  constructor() { 
    setTimeout( ()=> {
      this.allowNewServer = true;
    },2000)

  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created Name is '+this.serverName;
  }

  onUpdateServerName(event:any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
