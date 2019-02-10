import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UserPreferences } from "../../models/user-preferences";
import { UserSettingsProvider } from "../../providers/user-settings/user-settings";

@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  constructor(
    public navCtrl: NavController,
    public userSettingsProvider: UserSettingsProvider
  ) {}

  userPref: UserPreferences;

  ngOnInit(): void {
    this.userPref = this.userSettingsProvider.getUserPreferences();
  }

  guardarAjustes(): void {
    this.userSettingsProvider.setUserPreferences(this.userPref);
    console.log(this.userPref);
  }

  ionViewWillLeave(): void {
    //Mas info: https://blog.ionicframework.com/navigating-lifecycle-events/
    this.userSettingsProvider.setUserPreferences(this.userPref);
  }
}
