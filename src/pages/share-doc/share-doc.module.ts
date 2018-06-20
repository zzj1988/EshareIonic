import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ShareDocPage} from './share-doc';

@NgModule({
  declarations: [
    ShareDocPage,
  ],
  imports: [
    IonicPageModule.forChild(ShareDocPage),
  ],
})
export class ShareDocPageModule {}
