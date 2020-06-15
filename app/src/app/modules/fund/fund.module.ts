import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundListComponent } from './fund-list/fund-list.component';
import { InputSearchPipe } from './filter/inputSearch.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FundListComponent,
    InputSearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FundListComponent
  ]
})
export class FundModule { }
