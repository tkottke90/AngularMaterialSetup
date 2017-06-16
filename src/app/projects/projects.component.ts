import { Component, OnInit } from '@angular/core';
import { AchManager , Skill } from '../services/achievement.service'

export class Cards {
  title: string = "";
  imageURL: string = "";
  skillLink: Skill;

  constructor(newTitle: string, newImage: string, skill: Skill){
    this.title = newTitle;
    this.imageURL = newImage;
    this.skillLink = skill;
  }
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  constructor( private AM: AchManager ) { }

  myCards = [
    new Cards("Theater Design", "../../assets/Stage capture.jpg", this.AM.skillCategories[0]),
    new Cards("Software Engineering", "../../assets/Code Capture.JPG", this.AM.skillCategories[1]),
    new Cards("Drafting", "../../assets/Drafting Capture.JPG", this.AM.skillCategories[3]),
    new Cards("Zymology / Oenology", "", this.AM.skillCategories[4])
  ]


  ngOnInit() {

  }

}
