import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductOnsaleComponent } from './product-onsale/product-onsale.component';

const routes: Routes = [{
  path: 'product',
  component: ProductComponent,
  children: [{
    path: 'list',
    component: ProductListComponent
  },{
    path: 'onsale',
    component: ProductOnsaleComponent
  },{
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
