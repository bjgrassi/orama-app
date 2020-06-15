import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputSearch'
})

export class InputSearchPipe implements PipeTransform {
  public searchedItems;
  public fund;

  transform(list: any, searchText?: string): any[] {
    if(!searchText) return list;
  }
  
  search(name: string, searchText: string) {
    return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-|\s/g, " ")
    // .includes(searchText.toLowerCase())
  }
}