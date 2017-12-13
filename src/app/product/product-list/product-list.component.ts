import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatSort, PageEvent } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { StockManageService } from '../../core/stock-manage.service';
import { StockItem, Stock } from '../../shared/stockItem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns = [
    'SerialNum',
    'Name',
    'CurrentAmount',
    'TotalAmount',
    'OnSale'
  ];

  dataSource: MatTableDataSource<Stock>;
  pageNumber: number = 1;
  pageSize: number = 10;
  totalCount: number = 100;
  stocks: Stock[];

  pageSizeOptions = [5, 10, 25, 100];

  constructor(
    private stockManageService: StockManageService
  ) { }

  ngOnInit() {
    this.stockManageService.getAllStocks(this.pageNumber, this.pageSize)
      .subscribe(
      data => {
        const stockDataArray = <StockItem[]>data;
        this.initStocks(stockDataArray);
        this.dataSource = new MatTableDataSource(this.stocks);
      }
      )
  }

  initStocks(stocksData: StockItem[]): void {
    this.stocks = [];
    for (let i = 0; i < stocksData.length; i++) {
      let newStock = new Stock();
      newStock.init(i, stocksData[i]);
      this.stocks.push(newStock);
    }
  }

  pageChangeEvent(pageEvent: PageEvent): void {
    console.log(pageEvent.length);
    console.log(pageEvent.pageIndex);
    console.log(pageEvent.pageSize);
  }
}
