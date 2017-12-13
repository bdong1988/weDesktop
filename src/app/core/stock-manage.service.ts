import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';
import { timeout } from 'rxjs/operator/timeout';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/map';

import { StockItem } from '../shared/stockItem';
import { ServerData } from '../shared/serverData';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class StockManageService {
  readonly endPoint: string = '/desktop/api/stocks';
  constructor(
    private http: HttpClient
  ) { }

  getAllStocks(page: number, pageSize: number): Observable<StockItem[] | ErrorObservable> {
    // const params = new HttpParams()
    //   .set('page', page.toString())
    //   .set('pageSize', pageSize.toString())
    // return this.http.get<StockItemData>(this.endPoint, { params })
    //   .map(data => {
    //     if (!data.success) {
    //       return Observable.throw("读取商品列表失败");
    //     }
    //     return data.data;
    //   });
    const mockUrl: string = './assets/mocks/stocks.json'
    return this.http.get<StockItem[]>(mockUrl);
  }

}


class StockItemData extends ServerData {
  data: StockItem[];
}

