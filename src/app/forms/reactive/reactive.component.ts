import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  constructor() { }

  ngOnInit(): void {
  }

}
