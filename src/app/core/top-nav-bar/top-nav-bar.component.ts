import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {
  readonly navLinks: Array<NavLink> = [
    {path: 'home', name: '主页'},
    {path: 'user', name: '用户'},
    {path: 'stock', name: '库存'},
    {path: 'product', name: '商品'},
    {path: 'finance', name: '财务'}
  ];
  constructor() { }

  ngOnInit() {
  }
}

interface NavLink {
  path: string;
  name: string;
}

