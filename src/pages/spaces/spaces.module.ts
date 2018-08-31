import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SpacesPage } from './spaces';

@NgModule({
  declarations: [
    SpacesPage,
  ],
  imports: [
    IonicPageModule.forChild(SpacesPage),
    TranslateModule.forChild()
  ],
  exports: [
    SpacesPage
  ]
})
export class SpacesPageModule {}
