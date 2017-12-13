import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';
import { timeout } from 'rxjs/operator/timeout';
import 'rxjs/add/operator/map';

import { Product } from '../shared/product';
import { ServerData } from '../shared/serverData';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ProductManageService {
  readonly productUrl: string = '/mobile/api/products';
  private productCache: Product[];

  constructor(private http: HttpClient) { }
  getAllProduct(page: number, pageSize: number): Observable<Product[] | ErrorObservable> {

    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<ProductsData>(this.productUrl, {params})
        .map(data => {
          if (!data.success) {
            return Observable.throw("读取商品列表失败");
          }
          this.productCache = data.data;
          return this.productCache;
        });
    // const mockUrl = './assets/mocks/products.json';
    // return this.http.get<Product[]>(mockUrl)
    //   .pipe(
    //     map(data => {
    //       this.productCache = data;
    //       return this.productCache;
    //     })
    //   );
  }

  getProduct(id: number): Observable<Product | ErrorObservable> {
    if (this.productCache) {
      const product = this.productCache.filter(item => item.ID === id);
      return from(product);
    } else {
      const params = new HttpParams()
        .set('ID', id.toString());
      return this.http.get<ProductsData>(this.productUrl, { params })
        .map(data => {
          if (!data.success) {
            return Observable.throw("读取商品详细信息失败");
          }
          return data.data[0];
        });
    }
  }
}

class ProductsData extends ServerData {
  data: Product[];
}
