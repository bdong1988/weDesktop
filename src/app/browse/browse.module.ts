import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';

@NgModule({
  imports: [
    CommonModule,
    BrowseRoutingModule,
    SharedModule
  ],
  declarations: [
    BrowseComponent,
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class BrowseModule { }
