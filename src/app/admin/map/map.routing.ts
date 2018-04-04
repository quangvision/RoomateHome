import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map.component';
import { MapContentComponent } from './map-content/map-content.component';


const children: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'list'
  },
  {
    path: 'list',
    component: MapContentComponent
  },
  
]



export const routing = RouterModule.forChild([
  {
    path: '',
    component: MapComponent,
    children: children
  }
]);