import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Musician } from '../../models/musician';
import { Musicians } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-spaces',
  templateUrl: 'spaces.html',
})
export class SpacesPage {

  currentMusicians: Musician[];

  constructor(public navCtrl: NavController, public musicians: Musicians, public modalCtrl: ModalController, public navParams: NavParams) {
    this.currentMusicians = this.musicians.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpacesPage');
  }

  addMusician() {
    let addModal = this.modalCtrl.create('SpacesCreatePage');
    addModal.onDidDismiss(musician => {
      if (musician) {
        this.musicians.add(musician);
      }
    })
    addModal.present();
  }

  deleteMusician(musician) {
    this.musicians.delete(musician);
  }

  openMusician(musician: Musician) {
    this.navCtrl.push('MusicianDetailPage', {
      musician: musician
    });
  }
}
