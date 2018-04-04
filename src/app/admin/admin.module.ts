
import { I18NService } from '../core/shared/service/i18n-service';
//import { WebsocketService } from './shared/socket.service';
import { AdminComponent } from './admin.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
//import { AuthAdminGuard } from '../auth/shared/auth-admin.guard';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './core/header/header.component';
import { SideBarComponent } from './core/sidebar/sidebar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ServicesService } from './shared/services.service';
import { MapModule } from './map/map.module';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CoreModule,
    MapModule
  ],
  declarations: [   
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    // FilterBranchComponent  
  ],
  providers: [
    ServicesService,
    I18NService,   
  ],
})
export class AdminModule { }
