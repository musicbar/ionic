import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MusicianDetailPage } from './musician-detail';

@NgModule({
  declarations: [
    MusicianDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicianDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    MusicianDetailPage
  ]
})
export class MusicianDetailPageModule { }
