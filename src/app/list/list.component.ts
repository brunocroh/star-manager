import { Component, OnInit, Input } from '@angular/core';

import { CardComponent } from '../card/card.component';

import { List } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: List;

  constructor() {
    this.list = new List();
    this.list.name = "Javascript"
  }

  ngOnInit() {
  }

}
