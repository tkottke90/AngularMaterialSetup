import { Component, OnDestroy } from '@angular/core';
import { DisplayInfo } from '../services/display-info.service';

@Component({
    selector: 'app-details',
    templateUrl: './details-container.component.html',
    styleUrls: [ './details-container.component.css' ]
})
export class DetailContainer {

    constructor(private DI: DisplayInfo){}

    closeDisplay(){
        this.DI.hideDisplay();
    }

}