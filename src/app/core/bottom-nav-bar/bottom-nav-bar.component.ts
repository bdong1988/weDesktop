import { Component, OnInit } from '@angular/core';

interface NavLink {
  path: string;
  icon: string;
}

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss']
})

export class BottomNavBarComponent implements OnInit {
  readonly navLinks: Array<NavLink> = [
    {path: '/browse/products', icon: 'home'},
    {path: '/cart', icon: 'shopping_cart'},
    {path: '/user', icon: 'account_circle'}
  ];

  constructor() { }

  ngOnInit() {
  }

}


