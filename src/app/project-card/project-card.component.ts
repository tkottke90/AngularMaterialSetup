import { Component, OnInit, Input } from '@angular/core';
import { Cards } from '../projects/projects.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() card: Cards;

  constructor() { }

  ngOnInit() {
  }

}