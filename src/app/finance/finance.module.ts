import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { FinanceAuditComponent } from './finance-audit/finance-audit.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FinanceRoutingModule
  ],
  declarations: [
    FinanceComponent,
    FinanceAuditComponent]
})
export class FinanceModule { }
