import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Space } from '../../models/space';
import { Spaces } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-spaces',
  templateUrl: 'spaces.html',
})
export class SpacesPage {

  currentSpaces: Space[];

  constructor(public navCtrl: NavController, public spaces: Spaces, public modalCtrl: ModalController, public navParams: NavParams) {
    this.currentSpaces = this.spaces.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpacesPage');
  }

  /*
  addSpace() {
    let addModal = this.modalCtrl.create('SpacesCreatePage');
    addModal.onDidDismiss(space => {
      if (space) {
        this.spaces.add(space);
      }
    })
    addModal.present();
  }

  deleteSpace(space) {
    this.spaces.delete(space);
  }
  */

  openSpace(space: Space) {
    this.navCtrl.push('SpaceDetailPage', {
      space: space
    });
  }
}
