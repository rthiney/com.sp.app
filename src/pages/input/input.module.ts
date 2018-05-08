import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputPage } from './input';

@NgModule({
  declarations: [
    InputPage,
  ],
  imports: [
    IonicPageModule.forChild(InputPage),
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class InputPageModule {}
