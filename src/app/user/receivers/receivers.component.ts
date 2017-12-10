import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderReceiver } from '../../shared/orderReceiver';
import { UserProfileService } from '../../core/user-profile.service';
import { ShoppingCartService } from '../../core/shopping-cart.service';

@Component({
  selector: 'app-receivers',
  templateUrl: './receivers.component.html',
  styleUrls: ['./receivers.component.scss']
})
export class ReceiversComponent implements OnInit {
  receivers: OrderReceiver[];
  bLoading: boolean;
  constructor(
    private userProfileService: UserProfileService,
    private shoppingCartService: ShoppingCartService,
    private router: Router) { }

  ngOnInit() {
    this.getAllReceivers();
  }

  getAllReceivers(): void {
    this.bLoading = true;
    this.userProfileService.getReceivers(1, -1)
    .subscribe(
      (data) => {
        this.bLoading = false;
        this.receivers = <OrderReceiver[]>data;
      },
      () => {
        this.bLoading = false;
      });
  }

  onClickReceiver(index: number): void {
    this.shoppingCartService.setOrderReceiver(this.receivers[index]);
    this.router.navigate(['/cart/settle']);
  }

  onClickEditReceiver(index: number): void {
    this.userProfileService.setEditReceiver(this.receivers[index]);
    this.router.navigate(['/user/editreceiver']);
  }

  onClickNewReciever(): void {
    this.userProfileService.setEditReceiver(new OrderReceiver());
    this.router.navigate(['/user/editreceiver']);
  }

}
