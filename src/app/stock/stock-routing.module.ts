import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock.component';
import { StockListComponent } from './stock-list/stock-list.component';;

const routes: Routes = [{
  path: 'stock',
  component: StockComponent,
  children: [{
    path: 'list',
    component: StockListComponent
  }, {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
