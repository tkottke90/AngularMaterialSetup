import { Injectable } from '@angular/core';

@Injectable()
export class AchManager {

    achList = [
        new Achievement("Programing Foundations: Data Structures","Lynda.com",new Date(2017,5,31), "../../assets/DS Certificate.JPG","https://www.lynda.com/ViewCertificate/A13100FB68264EBB8EEF8C076AB3B2FE?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate")
    ]

    recList = [];

    getRecent(){

        let today = new Date();
        let thirtyDays = new Date(today.getTime() - 30*24*60*60*1000);

        this.recList = [];

        this.achList.forEach(Achievement => {
            if(Achievement.date > thirtyDays && this.recList.length > 3){
                this.recList.push(Achievement);
            }
        });

        
    }

}

export class Achievement{

    name: string;
    source: string;
    date: Date;

    imageURL: string;

    url: string;

    constructor(newName: string, newSource: string, dateAchieve: Date, achImage: string, achURL: string){
        this.name = newName;
        this.source = newSource;
        this.date = dateAchieve;
        this.imageURL = achImage;
        this.url = achURL;
    }

}