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
        "name": "Drake",
        "photo": "assets/img/musician/1.png",
        "description": "In My Feelings"
      },
      {
        "name": "Cardi B",
        "photo": "assets/img/musician/2.png",
        "description": "I Like It"
      },
      {
        "name": "Maroon 5",
        "photo": "assets/img/musician/3.png",
        "description": "Girls Like You"
      },
      {
        "name": "6ix9ine",
        "photo": "assets/img/musician/4.png",
        "description": "FEFE"
      },
      {
        "name": "Post Malone",
        "photo": "assets/img/musician/5.png",
        "description": "Better Now"
      },
      {
        "name": "Ella Mai",
        "photo": "assets/img/musician/6.png",
        "description": "Boo'd Up"
      },
      {
        "name": "Juice WRLD",
        "photo": "assets/img/musician/7.png",
        "description": "Lucid Dreams"
      },
      {
        "name": "Tyga",
        "photo": "assets/img/musician/8.png",
        "description": "Taste"
      },
      {
        "name": "Ariana Grande",
        "photo": "assets/img/musician/9.png",
        "description": "No Tears Left To Cry"
      },
      {
        "name": "Taylor Swift",
        "photo": "assets/img/musician/10.png",
        "description": "Delicate"
      }
    ];

    for (let musician of musicians) {
      this.musicians.push(new Musician(musician));
    }
  }

  query(params?: any) {
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
  }

  add(musician: Musician) {
    this.musicians.push(musician);
  }

  delete(musician: Musician) {
    this.musicians.splice(this.musicians.indexOf(musician), 1);
  }
}
