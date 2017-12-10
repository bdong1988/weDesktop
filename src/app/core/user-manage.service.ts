import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';
import { delay } from 'rxjs/operators/delay';
import { timeout } from 'rxjs/operator/timeout';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/map';

import { ServerData } from '../shared/serverData';
import { Observer } from 'rxjs/Observer';
import { UserDetails } from './user-details.model';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class UserManageService {
  readonly endPoint: string = '/desktop/api/uesrs';
  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(page: number, pageSize: number, searchText: string): Observable<UserDetails[] | ErrorObservable> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('searchText', searchText);
    return this.http.get<UserManageData>(this.endPoint, { params })
      .map(data => {
        if (!data.success) {
          return Observable.throw("读取商品列表失败");
        }
        return data.data;
      });
  }
}

class UserManageData extends ServerData {
  data: UserDetails[];
}
