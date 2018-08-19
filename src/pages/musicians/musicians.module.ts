import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MusiciansPage } from './musicians';

@NgModule({
  declarations: [
    MusiciansPage,
  ],
  imports: [
    IonicPageModule.forChild(MusiciansPage),
    TranslateModule.forChild()
  ],
  exports: [
    MusiciansPage
  ]
})
export class MusiciansPageModule {}
