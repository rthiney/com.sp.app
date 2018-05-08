
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { InputPage } from '../input/input';
import { ListPage } from '../list/list';
import { SnackbarPage } from './../snackbar/snackbar';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  tab4Root = InputPage;
  tab5Root = ListPage;
  tab6Root = SnackbarPage;
  constructor() {

  }
}
