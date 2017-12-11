import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserManagementRoutingModule
  ],
  declarations: [UserManagementComponent]
})
export class UserManagementModule { }
