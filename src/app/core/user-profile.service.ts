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
import { Order } from '../shared/order';
import { OrderReceiver } from '../shared/orderReceiver';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class UserProfileService {
  receivers: OrderReceiver[];
  editReceiver: OrderReceiver;
  readonly receiverUrl: string = '/mobile/api/orderreceiver';
  readonly orderUrl: string = '/mobile/api/orders';
  constructor(private http: HttpClient) { }

  getReceivers(page: number, pageSize: number): Observable<OrderReceiver[] | ErrorObservable> {
    // const mockUrl = '/assets/mocks/receivers.json';
    // return this.http.get<OrderReceiver[]>(mockUrl)
    //   .pipe(
    //     tap(data => this.receivers = data),
    //     delay(5000)
    //   );

    return this.http.get<ReceiversData>(this.receiverUrl)
      .pipe(
      map(data => {
        if (!data.success) {
          return Observable.throw('读取收件人失败');
        }
        this.receivers = data.data;
        return this.receivers;
      })
      );
  }

  setEditReceiver(rec: OrderReceiver): void {
    this.editReceiver = rec;
  }
  getEditReceiver(): OrderReceiver {
    return this.editReceiver;
  }
  saveEditReceiver(): Observable<ReceiversData | ErrorObservable> {
    return this.http.post<ReceiversData>(this.receiverUrl, this.editReceiver)
      .pipe(
      map(data => {
        if (!data.success) {
          return Observable.throw("保存收件人信息失败");
        }
        return data;
      })
      )
  }

  getAllOrders(): Observable<Order[] | ErrorObservable> {
    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '-1');
    return this.http.get<OrderData>(this.orderUrl, {params})
      .pipe(
        map( data => {
          if (!data.success) {
            return Observable.throw("读取订单信息失败");
          }
          return data.data;
        })
      );

    // const mockUrl = './assets/mocks/orders.json';
    // return this.http.get<Order[]>(mockUrl)
    //   .pipe(
    //     delay(2000)
    //   )
  }
}

class OrderData extends ServerData {
  data: Order[];
}

class ReceiversData extends ServerData {
  data: OrderReceiver[];
}
