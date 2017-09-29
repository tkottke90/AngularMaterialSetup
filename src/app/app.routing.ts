import { Routes, RouterModule } from '@angular/router';

import { MainContainer } from './main-container/main-container.component';
import { ProjectsComponent } from './projects/projects.component'

const appRoutes: Routes = [
    { path: '', component: MainContainer, pathMatch: 'full' },
    { path: 'projects' , component: ProjectsComponent }
];

export const routing = RouterModule.forRoot(appRoutes);