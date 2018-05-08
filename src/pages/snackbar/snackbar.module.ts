import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SnackbarPage } from './snackbar';
import { MatFormField } from '@angular/material';
@NgModule({
  declarations: [
    SnackbarPage,
  ],
  imports: [
    IonicPageModule.forChild(SnackbarPage),
  ],
})
export class SnackbarPageModule {}
