import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path : 'usermanagement', loadChildren: 'app/user-management/user-management.module#UserManagementModule'},
  {path : 'stock', loadChildren: 'app/stock/stock.module#StockModule'},
  {path : 'product', loadChildren: 'app/product/product.module#ProductModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{'useHash': true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
