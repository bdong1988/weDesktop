import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { filter, switchMap } from 'rxjs/operators';

import 'rxjs/add/operator/switchMap';

import { Product } from '../../shared/product';
import { ProductService } from '../../core/product.service';
import { ShoppingCartService } from '../../core/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  bLoading: boolean = false;
  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap((param: ParamMap) =>
        this.productService.getProduct(Number(param.get('id'))))
    )
    .subscribe(
      (data) => {
        this.bLoading = false;
        this.product = <Product>data;
      },
      () => {
        this.bLoading = false;
      });
  }

  onAddtoCartClick(): void {
    this.shoppingCartService.addToCart(
      this.product.ID,
      this.product.Title,
      this.product.Description,
      this.product.Picture1,
      this.product.Price
    );
  }
}
