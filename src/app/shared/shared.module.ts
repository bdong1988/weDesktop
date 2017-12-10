import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  MatCheckboxModule} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ItemCountComponent } from './item-count/item-count.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ProgressComponent } from './progress/progress.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserAnimationsModule,
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
    MatSelectModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  exports: [
    FormsModule,
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
    MatSelectModule,
    MatProgressBarModule,
    FlexLayoutModule,
    BackToTopComponent,
    ItemCountComponent,
    ConfirmDialogComponent,
    ProgressComponent,
    ProductComponent,
    ProductCardComponent,
    TopBarComponent
  ],
  declarations: [
    BackToTopComponent,
    ItemCountComponent,
    ConfirmDialogComponent,
    ProgressComponent,
    ProductComponent,
    ProductCardComponent,
    TopBarComponent
  ]
})
export class SharedModule {

}
