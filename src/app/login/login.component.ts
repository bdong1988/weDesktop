import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  hasError: boolean = false;
  bLoading: boolean = false;
  redirectUrl: string;
  constructor( 
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.redirectUrl = this.auth.getRedirectUrl() ? this.auth.getRedirectUrl()  : 'browse';
  }

  onClickCancel(): void {
    this.router.navigate(['']);
  }

  onClickLogIn(): void {
    this.bLoading = true;
    this.auth.login(this.username, this.password)
    .subscribe(
      () => {
        this.bLoading = false;
        this.hasError = false;
        this.router.navigate([this.redirectUrl]);
      },
      () => {
        this.bLoading = false;
        this.hasError = true;
      });
  }

}
