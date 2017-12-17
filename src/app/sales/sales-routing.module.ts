import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import { SalesStatsComponent } from './sales-stats/sales-stats.component';
import { SalesInfoComponent } from './sales-info/sales-info.component';
import { SalesPurchaseComponent } from './sales-purchase/sales-purchase.component';
import { SalesCheckoutComponent } from './sales-checkout/sales-checkout.component';

const routes: Routes = [{
  path: 'sales',
  component: SalesComponent,
  children: [
    {
      path: 'info',
      component: SalesInfoComponent
    }, {
      path: 'stats',
      component: SalesStatsComponent
    },
    {
      path: 'purchase',
      component: SalesPurchaseComponent
    },
    {
      path: 'checkout',
      component: SalesCheckoutComponent
    }, {
      path: '',
      redirectTo: 'info',
      pathMatch: 'full'
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
