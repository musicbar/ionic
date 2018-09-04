import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Spaces } from '../../providers'

@IonicPage()
@Component({
  selector: 'page-space-detail',
  templateUrl: 'space-detail.html',
})
export class SpaceDetailPage {
  space: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, spaces:Spaces) {
    this.space = navParams.get('space') || spaces.defaultSpace;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailPage');
  }

  showList() {
    this.navCtrl.push('SpacesPage');
  }

}
