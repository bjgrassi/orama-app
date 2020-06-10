import { Fund } from './fund';

export class MacroStrategy {
  constructor(public name: string, public mainStrategies: MainStrategy[]) {}
}

export class MainStrategy {
  constructor(public name: string, public funds: Fund[]) {}
}