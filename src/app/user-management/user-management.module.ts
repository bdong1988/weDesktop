import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  declarations: [UserManagementComponent]
})
export class UserManagementModule { }
