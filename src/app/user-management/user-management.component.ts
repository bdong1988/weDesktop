import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

import { User, UserData } from '../shared/user';
import { UserManageService } from '../core/user-manage.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  displayedColumns = [
    'SerialNo',
    'UserName',
    'UserTypeID',
    'RealName',
    'Tel',
    'Address',
    'Password',
    'LastLoginTime',
    'UpperID'];
  dataSource: MatTableDataSource<User>;
  filter: string;
  pageNumber: number = 1;
  pageSize: number = 10;
  users: User[];
  constructor(private userManageService: UserManageService) { }

  ngOnInit() {
    this.userManageService.getAllUsers(this.pageNumber, this.pageSize, '')
      .subscribe(
      data => {
        let userDataArray = <UserData[]>data;
        this.initUsers(userDataArray);
        this.dataSource = new MatTableDataSource(this.users);
      }
      )
  }

  initUsers(data: UserData[]): void {
    this.users = [];
    for (let i = 0; i < data.length; i++) {
      let newUser = new User();
      newUser.init(i,data[i]);
      this.users.push(newUser);
    }
  }

  applyFilter() {
    this.filter = this.filter.toLowerCase();
    this.dataSource.filter = this.filter;
  }
}
