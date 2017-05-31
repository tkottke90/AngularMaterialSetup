import { Component, OnInit } from '@angular/core';

export class Cards {
  title: string = "";
  imageURL: string = "";

  constructor(newTitle: string, newImage: string){
    this.title = newTitle;
    this.imageURL = newImage;
  }
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  constructor() { }

  myCards = [
    new Cards("Theater Design", "../../assets/Stage capture.jpg"),
    new Cards("Software Engineering", "../../assets/Code Capture.JPG"),
    new Cards("Drafting", "../../assets/Drafting Capture.JPG")
  ]


  ngOnInit() {
  }

}
