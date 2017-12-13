import { FormControl, Validators } from '@angular/forms';
import { stringData, numberData } from './celldata';

export class StockItem {
  ID: number;
  Name: string;
  CurrentAmount: number;
  SoldAmount: number;
  TotalAmount: number;
}

export class Stock {
  SerialNum: number;
  ID: number;
  Name: stringData = new stringData();
  CurrentAmount: numberData = new numberData();
  SoldAmount: numberData = new numberData();
  TotalAmount: numberData = new numberData();

  constructor() { }
  init(num: number, stockItem: StockItem) {
    this.SerialNum = num;
    this.ID = stockItem.ID;
    this.Name.data = stockItem.Name;
    this.Name.control = new FormControl(this.Name.data, {
      updateOn: 'blur',
      validators: [
        Validators.required
      ]
    });
    this.CurrentAmount.data = stockItem.CurrentAmount;
    this.CurrentAmount.control = new FormControl(this.CurrentAmount.data, {
      updateOn: 'blur',
      validators: [
        Validators.required
      ]
    });
    this.SoldAmount.data = stockItem.SoldAmount;
    this.SoldAmount.control = new FormControl(this.SoldAmount.data, {
      updateOn: 'blur',
      validators: [
        Validators.required
      ]
    });
    this.TotalAmount.data = stockItem.TotalAmount;
    this.TotalAmount.control = new FormControl(this.TotalAmount.data, {
      updateOn: 'blur',
      validators: [
        Validators.required
      ]
    });
  }
}
