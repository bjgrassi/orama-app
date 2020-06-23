import { Pipe, PipeTransform } from '@angular/core';

import { MacroStrategy, MainStrategy } from '../models/strategyList';
import * as Strategies from '../models/strategyList';

@Pipe({
  name: 'inputSearch',
  pure: false
})

export class InputSearchPipe implements PipeTransform {
  public macro: MacroStrategy;
  public main: MainStrategy;
  public searchedItems = [] as Strategies.MacroStrategy[];
  public simpleName;

  transform(list: MacroStrategy[], searchText):  MacroStrategy[] {
    if(!searchText) return list
    
    return list.filter(macro => {
      return macro.mainStrategies.filter(main => {
        return main.funds = main.funds.filter(fund => { 
          return this.transformText(fund.simple_name, searchText)
        });
      });
    });
  }
  
  transformText(name: string, searchText: string) {
    return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-|\s/g, " ")
    .includes(searchText.toLowerCase())
  }
}