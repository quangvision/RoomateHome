import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule} from './admin/admin.module';
import { AppComponent } from './app.component';
// import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', redirectTo:'admin',pathMatch:'full' },
  { path: 'admin', loadChildren: ('./admin/admin.module#AdminModule') },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
