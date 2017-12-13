import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatTabsModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule,
  MatPaginatorIntl } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ItemCountComponent } from './item-count/item-count.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ProgressComponent } from './progress/progress.component';
import { MatPaginatorIntlZh } from './matPaginatorIntlZh'

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatProgressBarModule,
    FlexLayoutModule,
    ItemCountComponent,
    ConfirmDialogComponent,
    ProgressComponent
  ],
  declarations: [
    ItemCountComponent,
    ConfirmDialogComponent,
    ProgressComponent
  ],
  providers:[
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlZh}
  ]
})
export class SharedModule {

}
