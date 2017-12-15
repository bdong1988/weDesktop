import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceComponent } from './finance.component';
import { FinanceAuditComponent } from './finance-audit/finance-audit.component';

const routes: Routes = [{
  path: 'finance',
  component: FinanceComponent,
  children: [{
    path: 'audit',
    component: FinanceAuditComponent
  },
  {
    path: '',
    redirectTo: 'audit',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
