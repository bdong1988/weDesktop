import { FormControl, Validators } from '@angular/forms';
import { stringData, numberData } from './celldata';

export class UserItem {
  CreateTime: string;
  ID: number;
  UserName: string;
  UserTypeID: number;
  RealName: string;
  Tel: string;
  Password: string;
  Address: string;
  UpperID: number;
  LastLoginTime: string;
  AliveUser: boolean;
}

export class User {
  constructor() { }
  init(
    num: number,
    UserItem: UserItem
  ) {
    this.SerialNo = num;
    this.CreateTime.data = UserItem.CreateTime;
    this.ID.data = UserItem.ID;
    this.UserName.data = UserItem.UserName;
    this.UserName.control = new FormControl(this.UserName.data, {
      updateOn: 'blur',
      validators: [
        Validators.required
      ]
    });
    this.UserTypeID.data = UserItem.UserTypeID;
    this.RealName.data = UserItem.RealName;
    this.RealName.control = new FormControl(this.RealName.data, {
      updateOn: 'blur',
      validators: [
        Validators.required
      ]
    });
    this.Tel.data = UserItem.Tel;
    this.Password.data = UserItem.Password;
    this.Address.data = UserItem.Address;
    this.UpperID.data = UserItem.UpperID;
    this.LastLoginTime.data = UserItem.LastLoginTime;
    this.AliveUser = UserItem.AliveUser;
    this.bSelect = false;
  }
  SerialNo: number;
  CreateTime: stringData = new stringData();
  ID: numberData = new numberData();
  UserName: stringData = new stringData();
  UserTypeID: numberData = new numberData();
  RealName: stringData = new stringData();
  Tel: stringData = new stringData();
  Password: stringData = new stringData();
  Address: stringData = new stringData();
  UpperID: numberData = new numberData();
  LastLoginTime: stringData = new stringData();
  AliveUser: boolean;
  bSelect: boolean;

}
