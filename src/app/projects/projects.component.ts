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
    new Cards("Sound Design", "http://www.google.com"),
    new Cards("Software Engineering", "http://www.thinkgeek.com/images/products/additional/large/jipm_loz_triforce_light_vendor.jpg")
  ]


  ngOnInit() {
  }

}
