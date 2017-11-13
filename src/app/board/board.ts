import { List } from '../list/list';
import { Card } from '../card/card';

export class Board{

  constructor(
    private name: string,
    private lists: Array<List> = new Array<List>(),
    private defaultList: List = new List()){
  }

  addDefaultList(cards?: Array<Card>){
    if(this.lists.length > 0){
      let card = this.getAllCards();
      this.defaultList.addCard(...cards);
    }else{
      this.defaultList = new List('Default List', cards);
      this.lists.unshift(this.defaultList);
    }
  }

  addList(name,cards?: Array<Card>){
    this.lists.push(new List(name, cards));
  }

  getAllCards(){
    let cards = this.lists.reduce((x: any,y: any) => x.addCard(y.getCards()));
    return cards;
  }

  getLists(): Array<List>{
    return this.lists.slice(0);
  }

  notRepeated(cards: Array<Card>){
  }
}
