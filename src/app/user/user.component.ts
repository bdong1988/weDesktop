import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PageEvent } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { User, UserItem } from '../shared/user';
import { UserManageService } from '../core/user-manage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns = [
    'select',
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
  selection = new SelectionModel<User>(true, []);
  filter: string;
  pageNumber: number = 1;
  pageSize: number = 10;
  users: User[];

  length = 100;
  pageSizeOptions = [5, 10, 25, 100];
  pageChangeEvent(pageEvent: PageEvent): void {
    console.log(pageEvent.length);
    console.log(pageEvent.pageIndex);
    console.log(pageEvent.pageSize);
  }
  constructor(private userManageService: UserManageService) { }

  ngOnInit() {
    this.userManageService.getAllUsers(this.pageNumber, this.pageSize, '')
      .subscribe(
      data => {
        const UserItemArray = <UserItem[]>data;
        this.initUsers(UserItemArray);
        this.dataSource = new MatTableDataSource(this.users);
      }
      );
  }

  initUsers(data: UserItem[]): void {
    this.users = [];
    for (let i = 0; i < data.length; i++) {
      let newUser = new User();
      newUser.init(i, data[i]);
      this.users.push(newUser);
    }
  }

  applyFilter() {
    this.filter = this.filter.toLowerCase();
    this.dataSource.filter = this.filter;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onClickSave(): void {
    for (let i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      console.log(element.RealName.control.dirty);
    }
  }
}
