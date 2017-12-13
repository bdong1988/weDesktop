import { FormControl, Validators } from '@angular/forms';
import { stringData, numberData } from './celldata';

export class UserData {
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
  constructor() {}
  init(
    num: number,
    userData: UserData
  ) {
    this.SerialNo = num;
    this.CreateTime.data = userData.CreateTime;
    this.ID.data = userData.ID;
    this.UserName.data = userData.UserName;
    this.UserTypeID.data = userData.UserTypeID;
    this.RealName.data = userData.RealName;
    this.RealName.control = new FormControl(this.RealName.data,  {
      updateOn: 'blur',
      validators: Validators.required
    });
    this.Tel.data = userData.Tel;
    this.Password.data = userData.Password;
    this.Address.data = userData.Address;
    this.UpperID.data = userData.UpperID;
    this.LastLoginTime.data = userData.LastLoginTime;
    this.AliveUser = userData.AliveUser;
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
