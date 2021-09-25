import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  info: string = 'cybersoft';
  people: any = { username: 'Nguyen', age: 18 };
  array: any = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  number: number = 0.235;

  inputValue: string = '';

  constructor() {
    console.log('constructor');
  }

  ngOnchanges() {
    console.log('ngOnchanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
