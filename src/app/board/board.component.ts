import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GithubService } from '../service/github.service';

import { Board } from './board';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-board',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private board: Board = new Board("Starred Repositories");
  private loadedData: boolean = false;

  constructor(private ref: ChangeDetectorRef,
    private githubService: GithubService) {


    this.githubService.starredRepo$
      .subscribe(cards => {
        if(!this.loadedData){
          this.board.addDefaultList(cards)
          this.saveBoard(null);
        }
        this.ref.markForCheck();
      });

    this.githubService.getStarredRepos(1);
    chrome.storage.sync.get("board", (data) => {

      if(!(data.board === undefined)){
        this.board = new Board(data.board.name);
        data.board.lists.map((list) => {
          this.board.addList(list.name, list.cards)
        })

        this.loadedData = true;
      }
    })

  }

  ngOnInit() {
  }

  addNewList(event){
    this.board.addList('New List');
  }

  saveBoard(event){
    console.log(this.board);
    chrome.storage.sync.set({ "board": this.board })
  }
}
