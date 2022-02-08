import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Game } from '../../models';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  public sort: string;
  public games: Array<Game>;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacritic', params['game-search']);
      } else {
        this.searchGames('metacritic');
      }
    });
  }

  searchGames(sort: string, search?: string): void {
    this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log('Game List -> ', gameList);
      });
  }
}
