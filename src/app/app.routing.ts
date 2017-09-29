import { Routes, RouterModule } from '@angular/router';

import { MainContainer } from './main-container/main-container.component';
import { ProjectInfoContainerComponent } from './projectinfo-container/projectinfo-container.component';

const appRoutes: Routes = [
    { path: '', component: MainContainer, pathMatch: 'full' },
    { path: 'projects' , component: ProjectInfoContainerComponent }
];

export const routing = RouterModule.forRoot(appRoutes);