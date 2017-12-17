import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { UserProfileService } from './user-profile.service';
import { ProductManageService } from './product-manage.service';
import { UserManageService } from './user-manage.service';
import { StockManageService } from './stock-manage.service';

import { SharedModule } from '../shared/shared.module';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    TopNavBarComponent,
    SideNavComponent,
    TopBarComponent
  ],
  declarations: [
    TopNavBarComponent,
    SideNavComponent,
    TopBarComponent
  ],
  providers: [
    ProductManageService,
    AuthenticationService,
    UserProfileService,
    UserManageService,
    StockManageService
  ]
})
export class CoreModule { }
