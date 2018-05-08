import { Component } from '@angular/core';
import { ActionSheetOptionStyle, Plugins  } from '@capacitor/core';
import { NavController } from 'ionic-angular';

const { Modals } = Plugins;
const { Toast } = Plugins;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  async showAlert() {
    let alertRet = await Modals.alert({
      title: 'Stop',
      message: 'this is an error'
    });
  }

  async showConfirm() {
    let confirmRet = await Modals.confirm({
      title: 'Confirm',
      message: 'Are you sure you\'d like to press the red button?'
    });
    console.log('Confirm ret', confirmRet);
  }

  async showPrompt() {
    let promptRet = await Modals.prompt({
      title: 'Hello',
      message: 'What\'s your name?'
    });
    console.log('Prompt ret', promptRet);
  }

  async showActions() {
    let promptRet = await Modals.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload'
        },
        {
          title: 'Share'
        },
        {
          title: 'Remove',
          style: ActionSheetOptionStyle.Destructive
        }
      ]
    })
    console.log('You selected', promptRet);
  }
  async toaster() {
    await Toast.show({
      text: 'Hello!'
    });
  }
}
