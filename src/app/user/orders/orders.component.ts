import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../core/user-profile.service';
import { ProductService } from '../../core/product.service';
import { Order } from '../../shared/order';
import { Product } from '../../shared/product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  bLoading: boolean = false;
  orders: Order[];
  constructor(
    private userProfileService: UserProfileService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.bLoading = true;
    this.userProfileService.getAllOrders()
      .subscribe(
      (data) => {
        this.orders = <Order[]>data;
        for (let i = 0; i < this.orders.length; i++) {
          this.productService.getProduct(this.orders[i].SaleProductID)
            .subscribe(
            data => {
              this.orders[i].Picture = (<Product>data).Picture1;
              this.orders[i].Title = (<Product>data).Title;
            }
            );
        }
        this.bLoading = false;
      },
      () => {
        this.bLoading = false;
      });
  }

}
