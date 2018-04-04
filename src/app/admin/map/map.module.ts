import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './map.routing';
import { MapComponent } from './map.component';
import { MapContentComponent } from './map-content/map-content.component';

@NgModule({
  imports: [
    CommonModule, routing
  ],
  declarations: [MapComponent, MapContentComponent]
})
export class MapModule { }
