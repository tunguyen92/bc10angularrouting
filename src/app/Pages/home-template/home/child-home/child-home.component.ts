import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss'],
})
export class ChildHomeComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnchanges - Child Home', changes);
  }

  ngOnInit(): void {}
}
