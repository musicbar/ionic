import { Injectable } from '@angular/core';

import { Musician } from '../../models/musician';

@Injectable()
export class Musicians {
  musicians: Musician[] = [];

  defaultMusician: any = {
    "name": "name",
    "photo": "assets/img/musician/1.png",
    "description": "description"
  };

  constructor() {
    let musicians = [
      {
        "name": "name",
        "photo": "assets/img/musician/1.png",
        "description": "description"
      },
      {
        "name": "name",
        "photo": "assets/img/musician/3.png",
        "description": "description"
      }
    ];

    for (let musician of musicians) {
      this.musicians.push(new Musician(musician));
    }
  }

  query(params?: any) {
    /*
    if (!params) {
      return this.musicians;
    }

    return this.musicians.filter((musician) => {
      for (let key in params) {
        let field = musician[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return musician;
        } else if (field == params[key]) {
          return musician;
        }
      }
      return null;
    });
    */

    return null;
  }

  add(musician: Musician) {
    this.musicians.push(musician);
  }

  delete(musician: Musician) {
    this.musicians.splice(this.musicians.indexOf(musician), 1);
  }
}
