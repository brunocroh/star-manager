import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';

import { ListComponent } from '../list/list.component';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private title: string = "github star manager"

  constructor(private githubService: GithubService) {
    this.githubService.starredRepo$.subscribe(
      repo => console.log(repo)
    )
  }

  ngOnInit() {
    this.githubService.getStarredRepos(1);
  }

}
