import { Component, OnInit } from '@angular/core';

// declare the javascript function here
declare function myMethod(message): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    myMethod('Hello world!'); // function call
  }
}
