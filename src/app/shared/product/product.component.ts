import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  thumbnailImg: string = './assets/img/product_cover.png';
  constructor() { }

  ngOnInit() {
    if (this.product.Picture1) {
      let img = new Image();
      img.src = this.product.Picture1;
      img.onload = () => {
        this.thumbnailImg = this.product.Picture1;
        img = null;
      };
    }
  }
}
