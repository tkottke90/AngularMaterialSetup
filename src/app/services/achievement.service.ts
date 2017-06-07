import { Injectable } from '@angular/core';

@Injectable()
export class AchManager {

    user = new User("tdkottke", new Date(2007,1));

    achList = [
        new Achievement("Programing Foundations: Data Structures","Lynda.com",new Date(2017,1), "../../../assets/DS Certificate.JPG","https://www.lynda.com/ViewCertificate/A13100FB68264EBB8EEF8C076AB3B2FE?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"),
        new Achievement("Learning AngularJS 2", "Lynda.com",new Date(2017,4),"../../../assets/AngularJS2 Certificate.JPG","https://www.lynda.com/Angular-tutorials/Learning-AngularJS-2/572160-2.html"),
        new Achievement("Angular 2 Essential Training", "Lynda.com", new Date(2017,5),"../../../assets/Angular2 Essential Certificate.JPG","https://www.lynda.com/AngularJS-tutorials/Angular-2-Essential-Training/540347-2.html")
    ]

    recList = [];

    theaterList = [
        new Skill("Sound Design", "Intermediate",new Date(2015,1)),
        new Skill("Set Design","Novice",new Date(2010,1)),
        new Skill("Light Design","Novice",new Date(2012,1)),
        new Skill("Costume/Makeup Design", "Beginner",new Date(2009,1))
    ];

    getRecent(){

        let today = new Date();
        let thirtyDays = new Date(today.getTime() - 30*24*60*60*1000);

        this.recList = [];

        this.achList.forEach(Achievement => {            
            if(Achievement.date > thirtyDays && this.recList.length < 3){
                this.recList.push(Achievement);
            }
        });

        
    }

}

export class User {
    userID: string = "";
    userStart: Date = new Date();

    constructor(id: string, startDate: Date){
        this.userID = id;
        this.userStart = startDate;
    }
}

export class Achievement {

    name: string = "";
    source: string = "";
    date: Date = new Date();

    imageURL: string = "";

    url: string = "";

    constructor(newName: string, newSource: string, dateAchieve: Date, achImage: string, achURL: string){
        this.name = newName;
        this.source = newSource;
        this.date = dateAchieve;
        this.imageURL = achImage;
        this.url = achURL;
    }

}

export class Skill {

    name: string = "";
    level: string = "";

    experienceYear: Date;

    masteryLevel: number = 0; // Out of 100
    masteryDisplay: number = 4;

    constructor(newName: string, lev: string, yearStarted: Date){
        this.name = newName;
        this.level = lev;
        this.experienceYear = yearStarted;

    }
}