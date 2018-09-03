import { Injectable } from '@angular/core';
import { Space } from '../../models/space';
import { Api } from '../api/api';

@Injectable()
export class Spaces {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/spaces', params);
  }

  add(Space: Space) {
  }

  delete(Space: Space) {
  }

}