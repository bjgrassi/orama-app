import { Component, OnInit } from '@angular/core';

import { FundService } from './fund.service';
import { Fund } from './models/fund';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss'],
})
export class FundComponent implements OnInit {
  public funds: Fund[];

  constructor(public fundService: FundService) {}

  ngOnInit(): void {
    this.getAllFunds();
  }

  private getAllFunds(): void {
    this.fundService.getAllFunds().subscribe((result: Fund[]) => {
      this.funds = result
    });
  }
}
