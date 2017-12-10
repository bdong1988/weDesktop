import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../shared/product';
import { ProductService } from '../../core/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  bLoading: boolean = false;

  constructor(
    private productService: ProductService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct(): void {
    this.bLoading = true;
    this.productService.getAllProduct(1, -1)
    .subscribe(
      (data) => {
        this.bLoading = false;
        this.products = <Product[]>data;
      },
      () => {
        this.bLoading = false;
      });
  }
}
