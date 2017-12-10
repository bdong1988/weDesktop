import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { SettleComponent } from './settle/settle.component';

const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'cart/settle', component: SettleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
