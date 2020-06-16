import { Pipe, PipeTransform } from '@angular/core';

import { MacroStrategy } from '../models/strategyList';

@Pipe({
  name: 'inputSearch'
})

export class InputSearchPipe implements PipeTransform {
  public searchedItems: MacroStrategy[];

  transform(list: MacroStrategy[], searchText):  MacroStrategy[] {
    if(!searchText) return list
    
    return list.filter(macro => {
      return macro.mainStrategies = macro.mainStrategies.filter(main => {
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