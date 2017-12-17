import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  readonly navLinks: Array<NavLink> = [
    {path: 'info', name: '销售信息'},
    {path: 'stats', name: '销售统计'},
    {path: 'purchase', name: '采购信息'},
    {path: 'checkout', name: '商品出库'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface NavLink {
  path: string;
  name: string;
}

