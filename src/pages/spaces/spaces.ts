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

  getSpaces(e) {
    // Reset items back to all of the items
    this.currentSpaces = this.spaces.query();

    // set val to the value of the ev target
    var val = e.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.currentSpaces = this.currentSpaces.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
