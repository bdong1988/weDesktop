import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {
  readonly navLinks: Array<NavLink> = [
    {path: 'home', name: '主页'},
    {path: 'usermanagement', name: '用户管理'},
    {path: 'stock/list', name: '库存管理'},
    {path: 'product/list', name: '商品管理'}
  ];
  constructor() { }

  ngOnInit() {
  }
}

interface NavLink {
  path: string;
  name: string;
}

