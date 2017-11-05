import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef
} from '@angular/core';

import { NgForm } from '@angular/forms';

import { CardComponent } from '../card/card.component';

import { List } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: List;
  editingName: boolean = false;

  constructor() {
  }

  ngOnInit() {
    console.log(this.list);
  }

  editListName(event){
    this.editingName = event;
  }

  dropSuccess(event: any){
    this.list.addCard(event.dragData);
  }

  dragSuccess(event: any){
    this.list.removeCard(event.dragData);
  }
}
