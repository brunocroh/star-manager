import { Card } from '../card/card';

export class List {

  constructor(
    private name: string = "Default List",
    private cards: Array<Card> = new Array<Card>()){

  }
}
