import { Component, OnInit } from '@angular/core';

//#region Methods which are defined in the .js files.

declare function printResult(input: string): void;

//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    printResult('Hello world!'); // Function call
  }

}
