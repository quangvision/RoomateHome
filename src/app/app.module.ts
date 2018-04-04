import { ShareModuleModule } from './share-module/share-module.module';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ShareModuleModule,
    BrowserModule,
    AppRoutingModule, 
    CoreModule,
    HttpModule,
    FormsModule    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
