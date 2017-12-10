import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart.service';
import { AuthenticationService } from './authentication.service';
import { UserProfileService } from './user-profile.service';

import { SharedModule } from '../shared/shared.module';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BottomNavBarComponent
  ],
  declarations: [
    BottomNavBarComponent
  ],
  providers: [
    ProductService,
    ShoppingCartService,
    AuthenticationService,
    UserProfileService
  ]
})
export class CoreModule { }
