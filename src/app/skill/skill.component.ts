import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Skill } from '../services/achievement.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill : Skill;

  progressBar: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  constructor() { }

  ngOnInit() {
    this.progressBar[1] = true;
  }

}
