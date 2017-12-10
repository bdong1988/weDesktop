import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { OrdersComponent } from './orders/orders.component';
import { ReceiversComponent } from './receivers/receivers.component';
import { EditReceiverComponent } from './edit-receiver/edit-receiver.component';


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [{
      path: 'orders',
      component: OrdersComponent
    }, {
      path: 'receivers',
      component: ReceiversComponent
    }, {
      path: 'editreceiver',
      component: EditReceiverComponent
    }, {
      path: '',
      redirectTo: 'orders',
      pathMatch: 'full'
    }]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
