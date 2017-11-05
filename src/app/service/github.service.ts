import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GithubService implements OnInit {

  private baseUrl: string = 'https://api.github.com/'

  private starredReposSource = new Subject<any>();
  public starredRepo$ = this.starredReposSource.asObservable();

  constructor(private http: HttpClient) {}

  ngOnInit(){

  }

  public getStarredRepos(page: number){
    const params = new HttpParams()
      .set('page', page.toString());

    let url = this.baseUrl+'users/brunocroh/starred?callback';

    this.http
      .get(url, {params})
      .subscribe((repos: Array<any>) => {
         this.starredRepo(repos);
      })
  }

  starredRepo(repos: any){
    this.starredReposSource.next(repos);
  }

}
