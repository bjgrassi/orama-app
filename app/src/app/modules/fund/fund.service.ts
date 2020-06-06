import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Fund } from './models/fund';

@Injectable({
  providedIn: 'root',
})
export class FundService {
  readonly ENTITY_URL: string = `https://s3.amazonaws.com/orama-media/json/fund_detail_full.json`;

  constructor(public readonly http: HttpClient) {}

  public getAllFunds(): Observable<Fund[]> {
    //comment: change limit
    return this.http.get<Fund[]>(`${this.ENTITY_URL}`)
  }
}
