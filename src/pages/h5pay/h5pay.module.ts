import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { H5payPage } from './h5pay';

@NgModule({
  declarations: [
    H5payPage,
  ],
  imports: [
    IonicPageModule.forChild(H5payPage),
  ],
})
export class H5payPageModule {}
