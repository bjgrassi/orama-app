import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundListComponent } from './fund-list/fund-list.component';

@NgModule({
  declarations: [
    FundListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FundListComponent
  ]
})
export class FundModule { }
