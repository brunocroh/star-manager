import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
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

  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  editListName(event){
    this.editingName = event;
    this.change.emit(null);
  }

  dropSuccess(event: any){
    this.list.addCard(event.dragData);
    this.change.emit(null);
  }

  dragSuccess(event: any){
    this.list.removeCard(event.dragData);
  }
}
