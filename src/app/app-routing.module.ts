import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path : 'usermanagement', loadChildren: 'app/user/user.module#UserModule'},
  {path : 'stock', loadChildren: 'app/stock/stock.module#StockModule'},
  {path : 'product', loadChildren: 'app/product/product.module#ProductModule'},
  {path : 'finance', loadChildren: 'app/finance/finance.module#FinanceModule'},
  {path : 'sales', loadChildren: 'app/sales/sales.module#SalesModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {'useHash': true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
