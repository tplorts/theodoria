import { Component, OnInit } from '@angular/core';
import { range } from 'lodash';


@Component({
  selector: 'app-hypnoblobs',
  templateUrl: './hypnoblobs.component.html',
  styleUrls: ['./hypnoblobs.component.scss']
})
export class HypnoblobsComponent implements OnInit {
  private _blobCount = 7;
  private _blobRange: number[];

  constructor() {
    this._blobRange = range(this._blobCount);
  }

  ngOnInit() {
  }

  public get blobRange(): number[] {
    return this._blobRange;
  }
}
