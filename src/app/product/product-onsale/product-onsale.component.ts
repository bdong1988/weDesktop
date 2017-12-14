import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-onsale',
  templateUrl: './product-onsale.component.html',
  styleUrls: ['./product-onsale.component.scss']
})
export class ProductOnsaleComponent implements OnInit {

  imgs: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  onFileSelect(name: string): void {
    this.imgs.push(name);
  }
}

