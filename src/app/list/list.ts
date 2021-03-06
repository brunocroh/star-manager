import { Card } from '../card/card';

export class List {

  constructor(
    private name: string = "Default List",
    private cards: Array<Card> = new Array<Card>()){

  }

  addCard(...cards: Array<Card>){
    this.cards = this.cards.concat(cards);
  }

  getCards(): Array<Card>{
    return this.cards;
  }

  removeCard(card: Card){
    this.cards.splice(this.cards.indexOf(card), 1);
  }
}
