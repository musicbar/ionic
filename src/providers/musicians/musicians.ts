import { Injectable } from '@angular/core';
import { Musician } from '../../models/musician';
import { Api } from '../api/api';

@Injectable()
export class Musicians {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/musicians', params);
  }

  add(Musician: Musician) {
  }

  delete(Musician: Musician) {
  }

}

/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MusiciansProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MusiciansProvider Provider');
  }

}
*/