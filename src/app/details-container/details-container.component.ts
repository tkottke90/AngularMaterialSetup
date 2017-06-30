import { Component, OnInit } from '@angular/core';
import { DisplayInfo } from '../services/display-info.service';

@Component({
    selector: 'app-details',
    templateUrl: './details-container.component.html',
    styleUrls: [ './details-container.component.css' ]
})
export class DetailContainer {

    projectDisplay: boolean = true;
    achieveDisplay: boolean = true;

    constructor(private DI: DisplayInfo){ }

    ngOnInit(){
        this.DI.activeDisplayWindow.subscribe({
            next: (b) => {
                this.projectDisplay = this.DI.projectsActive;
                this.achieveDisplay = !this.projectDisplay;
            }
        });
    }

    closeDisplay(){
        this.DI.hideDisplay();
    }

}