import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Musicians } from '../../providers'

@IonicPage()
@Component({
  selector: 'page-musician-detail',
  templateUrl: 'musician-detail.html',
})
export class MusicianDetailPage {
  musician: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, musicians:Musicians) {
    this.musician = navParams.get('musician') || musicians.defaultMusician;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicianDetailPage');
  }

}
