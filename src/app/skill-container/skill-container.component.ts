import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-container',
  templateUrl: './skill-container.component.html',
  styleUrls: ['./skill-container.component.css']
})
export class SkillContainerComponent implements OnInit {


  currentYear: number = new Date().getFullYear();
  midYear: number = this.currentYear - 5;
  firstYear: number = this.currentYear - 10;

  constructor() { }

  ngOnInit() {
  }

}
