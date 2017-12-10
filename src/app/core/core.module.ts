import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductService } from './product.service';
import { AuthenticationService } from './authentication.service';
import { UserProfileService } from './user-profile.service';
import { UserManageService } from './user-manage.service';

import { SharedModule } from '../shared/shared.module';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    TopNavBarComponent
  ],
  declarations: [
    TopNavBarComponent
  ],
  providers: [
    ProductService,
    AuthenticationService,
    UserProfileService,
    UserManageService
  ]
})
export class CoreModule { }
