import { Component, OnInit } from '@angular/core';

// declare the javascript function
declare function myMethod(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    myMethod(); // JS file call
  }
}
