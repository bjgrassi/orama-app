import { Component, OnInit } from '@angular/core';

import { FundService } from '../fund.service';
import { Fund } from '../models/fund';
import * as Strategies from '../models/strategyList';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit {
  public searchFund: string;
  public macroStrategyFunds: Strategies.MacroStrategy[] = [];
  
  constructor(private fundService: FundService) {}

  ngOnInit(): void {
    this.getFundsGroupedByStrategy();
  }

  private getFundsGroupedByStrategy() {
    this.fundService.getAllFunds().subscribe((result: Fund[]) => {
      this.macroStrategyFunds = this.groupByStrategy(result);
    });
  }

  private groupByStrategy(fundList: Fund[]): Strategies.MacroStrategy[] {
    let strategyList = [] as Strategies.MacroStrategy[];
    fundList.forEach((fund) => {
      let macroStrategy = fund.specification.fund_macro_strategy;
      let mainStrategy = fund.specification.fund_main_strategy;
      
      if (!strategyList[macroStrategy.id])
        strategyList[macroStrategy.id] = new Strategies.MacroStrategy(macroStrategy.name, true, [] as Strategies.MainStrategy[] );
      if (!strategyList[macroStrategy.id].mainStrategies[mainStrategy.id])
        strategyList[macroStrategy.id].mainStrategies[mainStrategy.id] = new Strategies.MainStrategy(mainStrategy.name, true, [] as Fund[]);
      
      strategyList[macroStrategy.id].mainStrategies[mainStrategy.id].funds.push(fund);
    });
    strategyList = strategyList.filter(el => el != null);
    strategyList.forEach(macro => {
      macro.mainStrategies = macro.mainStrategies.filter(el => el != null);
      macro.mainStrategies.forEach(main => main.funds = main.funds.filter(el => el != null));
    });
    return strategyList;
  }

  public MacroStrategyChecked() {
    return this.macroStrategyFunds.filter(macro => {
      return macro.checked
    });
  }

  public MainStrategyChecked(macro) {
    return macro.mainStrategies.filter(main => main.checked);
  }
  
}
