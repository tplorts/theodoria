import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';


class WebProject {
  constructor(
    public name: string,
    public url: string,
  ) {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _projects: WebProject[];

  constructor() {
    this._projects = [
      new WebProject('Simon Game', 'http://simon-game.theodoria.net'),
      new WebProject('Word Search Game', 'http://word-search.theodoria.net'),
      new WebProject('Map My Reps', 'http://usa-government-info.theodoria.net'),
    ];
  }

  ngOnInit() {
  }

  public get projects(): WebProject[] {
    return this._projects;
  }
}
