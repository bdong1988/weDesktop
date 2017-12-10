import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductManagementComponent } from './product-management.component';

@NgModule({
  imports: [
    CommonModule,
    ProductManagementRoutingModule
  ],
  declarations: [ProductManagementComponent]
})
export class ProductManagementModule { }
