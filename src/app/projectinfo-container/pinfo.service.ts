import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Project } from '../services/achievement.service';

@Injectable()
export class ProjectInfoService {

    project = new BehaviorSubject<Project>(null);

}

