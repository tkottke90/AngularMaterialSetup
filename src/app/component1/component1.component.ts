import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @Output() showNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  
  }

}
