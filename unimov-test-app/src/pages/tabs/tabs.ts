import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapPage;
  tab3Root = ProfilePage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
