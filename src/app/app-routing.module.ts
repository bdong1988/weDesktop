import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path : 'usermanagment', loadChildren: 'app/user-management/user-management.module#UserManagementModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{'useHash': true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
