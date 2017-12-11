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
import { User, UserData } from '../shared/user';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class UserManageService {
  readonly endPoint: string = '/desktop/api/uesrs';
  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(page: number, pageSize: number, searchText: string): Observable<UserData[] | ErrorObservable> {
    // const params = new HttpParams()
    //   .set('page', page.toString())
    //   .set('pageSize', pageSize.toString())
    //   .set('searchText', searchText);
    // return this.http.get<UserServerData>(this.endPoint, { params })
    //   .map(data => {
    //     if (!data.success) {
    //       return Observable.throw("读取商品列表失败");
    //     }
    //     return data.data;
    //   });
    const mockUrl: string = './assets/mocks/users.json'
    return this.http.get<UserData[]>(mockUrl);
  }
}

class UserServerData extends ServerData {
  data: UserData[];
}
