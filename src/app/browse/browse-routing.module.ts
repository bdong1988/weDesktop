import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [{
  path: 'browse',
  component: BrowseComponent,
  children: [{
    path: 'products',
    component: ProductListComponent
  }, {
    path: 'products/:id',
    component: ProductDetailComponent
  }, {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
