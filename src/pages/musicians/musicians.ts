import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Musician } from '../../models/musician';
import { Musicians } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-musicians',
  templateUrl: 'musicians.html',
})
export class MusiciansPage {
  currentMusicians: Musician[];

  constructor(public navCtrl: NavController, public musicians: Musicians, public modalCtrl: ModalController, public navParams: NavParams) {
    this.currentMusicians = this.musicians.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusiciansPage');
  }

  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(musician => {
      if (musician) {
        this.musicians.add(musician);
      }
    })
    addModal.present();
  }

  /**
   * Delete an musician from the list of musicians.
   */
  deleteItem(musician) {
    this.musicians.delete(musician);
  }

  /**
   * Navigate to the detail page for this musician.
   */
  openItem(musician: Musician) {
    this.navCtrl.push('ItemDetailPage', {
      musician: musician
    });
  }
}
