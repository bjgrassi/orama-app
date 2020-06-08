import { Component, OnInit } from '@angular/core';

import { FundService } from '../fund.service';
import { Fund } from '../models/fund';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent implements OnInit {
  public macroStrategyFunds: Object;
  public macroStrategyFundsKeys: any[] = [];
  public mainStrategyFunds: Object;
  public mainStrategyFundsKeys: any[] = [];

  constructor(private fundService: FundService) {}

  ngOnInit(): void {
    this.getAllFixedIncomeFund();
  }

  private getAllFixedIncomeFund() {
    this.fundService.getAllFunds().subscribe((result: Fund[]) => {
      this.macroStrategyFunds = this.groupByStrategy(result, false);
      this.macroStrategyFundsKeys = this.getStrategyKeyNames(this.macroStrategyFunds)
      this.mainStrategyFunds = this.groupByStrategy(result, true);
      this.mainStrategyFundsKeys = this.getStrategyKeyNames(this.mainStrategyFunds)
    });
  }

  private groupByStrategy(objectArray: Fund[], isMacroStrategy: boolean): Object {
    let newObject = {},
        key: string;
    objectArray.forEach((fund) => {
      if(isMacroStrategy){
        key = fund.specification.fund_main_strategy.name;
      } else {
        key = fund.specification.fund_macro_strategy.name;
      }
      if (!newObject[key]) {
        newObject[key] = [];
      }
      newObject[key].push(fund);
    });
    return newObject;
  }

  private getStrategyKeyNames(strategy: Object): String[] {
    let keyNames = [],
        count = 0;
    for (let key in strategy) {
      if(strategy.hasOwnProperty(key)) {
        keyNames[count] = key;
        count += 1;
      }
    }
    return keyNames
  }
}
