import { Component, OnInit } from '@angular/core';
import { MdButton } from '@angular/material';


import { DisplayInfo } from './services/display-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDetailVisible;

  constructor(private DI: DisplayInfo) {  }

  ngOnInit(){
    // Create Subscription to Service
    /*
      If the subscription fails or if the subscription is ended
      the page will hide the component and the page will need to be
      reloaded or subscription renewed to view again.
    */
    this.DI.activeDisplayWindow.subscribe({
      next: (s) => { this.isDetailVisible = s; },
      error: (e) => 
        {
          console.error(e); 
          /* Future Dev - Log Error */
          this.isDetailVisible = false;
        },
      complete: () => 
        {
          console.log(new Date() + " - Detail View Subscription Completed");
          /* Future Dev - Log Completion */
          this.isDetailVisible = false;
        }
    });
  }

}
