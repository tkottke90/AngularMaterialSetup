import { Component, OnInit, Input, HostListener} from '@angular/core';
import { Cards } from '../projects/projects.component';
import { SkillDisplay } from '../services/skill-display.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() card: Cards;

  @HostListener('mouseenter') MouseEnter() {
      this.isHoverTarget = true;
  }

  @HostListener('mouseleave') MouseLeave() {
      this.isHoverTarget = false;
  }   

  isHoverTarget: boolean = false;

  title: string = "";
  imageURL: string = "";

  constructor(private SD: SkillDisplay) { 
  }

  ngOnInit() {
    this.title = this.card.title;
    this.imageURL = this.card.imageURL;
  }

  cardClick(){
    //console.log(this.card.title + " was clicked");
    //console.log("Skill Link: " + this.card.skillLink);
    this.SD.updateSkill(this.card.skillLink);
  }

}