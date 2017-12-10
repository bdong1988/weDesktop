import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commodity } from '../../shared/commodity';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { OrderReceiver } from '../../shared/orderReceiver';
import { ProductCount } from '../../shared/productCount';

@Component({
  selector: 'app-settle',
  templateUrl: './settle.component.html',
  styleUrls: ['./settle.component.scss']
})
export class SettleComponent implements OnInit {
  commodities : Commodity[];
  receiver: OrderReceiver;
  hasError: boolean = false;
  bLoading: boolean = false;
  constructor(
    private router: Router,
    private shoppingCartService : ShoppingCartService) { }

  ngOnInit() {
    this.commodities = this.shoppingCartService.getCommodities();
    this.receiver = this.shoppingCartService.getOrderReceiver();
  }

  isOrderDisabled(): boolean {
    return !this.shoppingCartService.getOrderReceiver()
  }

  getTotalAmount(): number {
    return this.shoppingCartService.getTotalAmount();
  }

  onClickSelectReceiver(): void {
    this.router.navigate(['user/receivers']);
  }

  onClickOrder(): void {
    this.bLoading = true;
    this.shoppingCartService.orderCart()
      .subscribe(
        data => {
          let countsData = <ProductCount[]>data;
          if (countsData.length > 0) {
            this.shoppingCartService.updateCommoditiesCounts(countsData);
            this.router.navigate(['cart']);
          }else{
            this.router.navigate(['user/orders']);
          }
          this.bLoading = false;
        },
        error => {
          this.bLoading = false;
        }
      );
  }

}
