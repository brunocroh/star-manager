import { List } from '../list/list';
import { Card } from '../card/card';

export class Board{

  constructor(
    private name: string,
    private lists: Array<List> = new Array<List>()){
  }

  addDefaultList(cards?: Array<Card>){
    this.lists.unshift(new List("Default List", cards));
  }

  addList(name,cards?: Array<Card>){
    this.lists.push(new List(name, cards));
  }
}
