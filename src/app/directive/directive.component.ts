import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  showPassword = true;
  clickList = [];
  noClick =0;
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.showPassword = !this.showPassword;
    console.log(this.showPassword);
    this.clickList.push(this.noClick++);
    
  }
  getNoClick() {
    return this.clickList.length;
  }
  getBackgroundColor(click) {
    if(click > 5) 
      return 'blue';
    return 'inherit';
  }



}
