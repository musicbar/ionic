import { Injectable } from '@angular/core';

import { Space } from '../../models/space';

@Injectable()
export class Spaces {
  spaces: Space[] = [];

  defaultSpace: any = {
    "name": "Sid Gold’s Request Room",
    "photo": "assets/img/space/1.png",
    "description": ""
  };

  constructor() {
    let spaces = [
      {
        "name": "Sid Gold’s Request Room",
        "photo": "assets/img/space/1.png",
        "description": ""
      },
      {
        "name": "Village Vanguard",
        "photo": "assets/img/space/2.png",
        "description": ""
      },
      {
        "name": "Barbes",
        "photo": "assets/img/space/3.png",
        "description": ""
      },
      {
        "name": "Iridium",
        "photo": "assets/img/space/4.png",
        "description": ""
      },
      {
        "name": "Blue Note",
        "photo": "assets/img/space/5.png",
        "description": ""
      },
      {
        "name": "Jazz Standard",
        "photo": "assets/img/space/6.png",
        "description": ""
      },
      {
        "name": "The Stone at The New School Glass Box Theatre",
        "photo": "assets/img/space/7.png",
        "description": ""
      },
      {
        "name": "Village Vanguard",
        "photo": "assets/img/space/8.png",
        "description": ""
      },
      {
        "name": "Jazz mobile",
        "photo": "assets/img/space/9.png",
        "description": ""
      },
      {
        "name": "Zinc Bar",
        "photo": "assets/img/space/10.png",
        "description": ""
      }
    ];

    for (let space of spaces) {
      this.spaces.push(new Space(space));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.spaces;
    }

    return this.spaces.filter((space) => {
      for (let key in params) {
        let field = space[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return space;
        } else if (field == params[key]) {
          return space;
        }
      }
      return null;
    });
  }

  add(space: Space) {
    this.spaces.push(space);
  }

  delete(space: Space) {
    this.spaces.splice(this.spaces.indexOf(space), 1);
  }
}
