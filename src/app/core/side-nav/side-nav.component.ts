import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  readonly navLinks: Array<NavLink> = [
    {path: 'home', name: '主页'},
    {path: 'user', name: '用户'},
    {path: 'stock', name: '库存'},
    {path: 'product', name: '商品'},
    {path: 'finance', name: '财务'},
    {path: 'sales', name: "销售"}
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface NavLink {
  path: string;
  name: string;
}

