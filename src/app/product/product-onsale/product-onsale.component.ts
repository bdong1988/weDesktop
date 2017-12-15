import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-onsale',
  templateUrl: './product-onsale.component.html',
  styleUrls: ['./product-onsale.component.scss']
})
export class ProductOnsaleComponent implements OnInit {

  img0: string;
  img1: string;
  img2: string;
  img3: string;
  constructor() { }

  ngOnInit() {
  }

  onFileSelect(name: string, index: number): void {
    switch (index) {
      case 0:
        this.img0 = name;
        break;
      case 1:
        this.img1 = name;
        break;
      case 2:
        this.img2 = name;
        break;
      case 3:
        this.img3 = name;
        break;
      default:
        break;
    }
  }
}

