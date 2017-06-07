import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Skill } from '../services/achievement.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill : Skill;
  @Input() yearsLength : number;

  constructor() { }

  ngOnInit() {
    this.setProgress();
    
  }

  setProgress() {


    let currentYears = new Date().getFullYear();
    let skillYears = this.skill.experienceYear.getFullYear();

    let exp = currentYears - skillYears;
    console.log(currentYears + " - " + skillYears + " = " + exp);

  }

}
