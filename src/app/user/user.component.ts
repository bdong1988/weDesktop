import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/authentication.service';

interface NavLink {
  path: string;
  displayText: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  readonly navLinks: Array<NavLink> = [
    { path: '/user/orders', displayText: '订单列表' },
    { path: '/user/receivers', displayText: '收货人信息' }
  ];
  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.auth.setRedirectUrl('user');
      this.router.navigate(['login']);
      return;
    }
  }

}
