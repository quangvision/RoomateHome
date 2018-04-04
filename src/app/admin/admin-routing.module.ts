import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { MapModule } from './map/map.module';
export const children: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'map' },  
  { path: 'map', loadChildren: ('./map/map.module#MapModule') },
]
export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: children,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
