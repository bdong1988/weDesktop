import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  thumbnailImg1: string = './assets/img/product_cover.png';
  thumbnailImg2: string = './assets/img/product_cover.png';
  thumbnailImg3: string = './assets/img/product_cover.png';
  thumbnailImg4: string = './assets/img/product_cover.png';
  constructor() { }

  ngOnInit() {
    if (this.product.Picture1) {
      let img = new Image();
      img.src = this.product.Picture1;
      img.onload = () => {
        this.thumbnailImg1 = this.product.Picture1;
        img = null;
      };
    }
    if (this.product.Picture2) {
      let img = new Image();
      img.src = this.product.Picture2;
      img.onload = () => {
        this.thumbnailImg2 = this.product.Picture2;
        img = null;
      };
    }
    if (this.product.Picture3) {
      let img = new Image();
      img.src = this.product.Picture3;
      img.onload = () => {
        this.thumbnailImg3 = this.product.Picture3;
        img = null;
      };
    }
    if (this.product.Picture4) {
      let img = new Image();
      img.src = this.product.Picture4;
      img.onload = () => {
        this.thumbnailImg4 = this.product.Picture4;
        img = null;
      };
    }
  }

}
