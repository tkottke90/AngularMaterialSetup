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
    new Cards("test", "http://www.google.com"),
    new Cards("test2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-S90M_aS3-0CCM4mNKJ9z1CdbIoC6b4tAieckPUEfgi1n_3jT")
  ]


  ngOnInit() {
  }

}
