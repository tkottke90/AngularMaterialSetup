import { Component, OnInit, Input } from '@angular/core';
import { Achievement } from '../services/achievement.service';

@Component({
  selector: 'app-pro-card',
  templateUrl: './pro-card.component.html',
  styleUrls: ['./pro-card.component.css']
})
export class ProCardComponent implements OnInit {

  @Input() data: Achievement;
  
  constructor() {
  
   }

  ngOnInit() {

  }

}
