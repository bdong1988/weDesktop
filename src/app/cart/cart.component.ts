import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Commodity } from '../shared/commodity';
import { ShoppingCartService } from '../core/shopping-cart.service';
import { AuthenticationService } from '../core/authentication.service';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  commodities: Commodity[];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private auth: AuthenticationService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.auth.setRedirectUrl('cart');
      this.router.navigate(['login']);
      return;
    }
    this.commodities = this.shoppingCartService.getCommodities();
  }

  getTotalAmount(): number {
    return this.shoppingCartService.getTotalAmount();
  }

  onRemoveClick(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { title: '确定删除所有选中的商品么?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.shoppingCartService.removeUnselectedCommodity();
      }
    });
  }

  onSettleClick(): void {
    this.router.navigate(['cart/settle']);
  }
}
