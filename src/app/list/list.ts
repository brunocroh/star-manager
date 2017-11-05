import { Card } from '../card/card';

export class List {

  constructor(
    private name: string = "Default List",
    private cards: Array<Card> = new Array<Card>()){

  }

  addCard(card: Card){
    this.cards.push(card);
  }

  removeCard(card: Card){
    this.cards.splice(this.cards.indexOf(card), 1);
  }
}
