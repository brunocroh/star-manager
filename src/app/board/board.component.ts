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

  private board: Board;

  constructor(private ref: ChangeDetectorRef,
    private githubService: GithubService) {

    this.board = new Board('github star manager');

    this.githubService.starredRepo$
      .subscribe(cards => {
        console.log(cards);
        this.board.addDefaultList(cards)
        this.ref.markForCheck();
      });
    this.githubService.getStarredRepos(1);
  }

  ngOnInit() {
  }

  addNewList(event){
    this.board.addList('New List');
  }

}
