import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { UserDetails } from './user-details.model';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operator/map';

import { ServerData } from '../shared/serverData';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { delay } from 'rxjs/operators/delay';

@Injectable()
export class AuthenticationService {
  readonly authticationUrl: string = '/mobile/api/login';
  private _isAuthenticated: boolean = false;
  private _userDetail: UserDetails;
  private _redirectUrl: string;
  constructor(private http: HttpClient) { }

  setRedirectUrl(url: string): void {
    this._redirectUrl = url;
  }

  getRedirectUrl(): string {
    return this._redirectUrl;
  }

  login(username: string, password: string): Observable<UserDetails | ErrorObservable> {
    return this.http.post<UserDetailData>(this.authticationUrl, {
      'username': username,
      'password': password
    })
    .map( data => {
      if (!data.success) {
        return Observable.throw('Internal server error');
      }
      this._userDetail = data.data[0];
      this._isAuthenticated = true;
      return this._userDetail;
    });
    // this._userDetail = new UserDetails();
    // this._userDetail.UserName = 'admin';
    // this._userDetail.UserTypeID = 1;
    // this._isAuthenticated = true;
    // return of(this._userDetail).pipe(delay(2000));
  }

  isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
}

class UserDetailData extends ServerData{
  data: UserDetails[];
}
