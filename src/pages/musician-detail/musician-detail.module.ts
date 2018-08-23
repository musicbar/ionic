import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicianDetailPage } from './musician-detail';

@NgModule({
  declarations: [
    MusicianDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicianDetailPage),
  ],
})
export class MusicianDetailPageModule {}
