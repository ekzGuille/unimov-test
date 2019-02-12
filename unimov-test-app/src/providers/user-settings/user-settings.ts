import { Injectable } from "@angular/core";
import { AppPreferences } from "@ionic-native/app-preferences";
import { UserPreferences } from "../../models/user-preferences";

@Injectable()
export class UserSettingsProvider {
  usrPref: UserPreferences;

  constructor(private appPreferences: AppPreferences) {
    this.usrPref = new UserPreferences();
  }

  getUserPreferences(): UserPreferences {
    return this.usrPref;
  }

  setUserPreferences(userPreferences: UserPreferences): void {
    this.usrPref = userPreferences;
    this.appPreferences
      .store("", "usrPref", 1)
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
  }
  // https://ionicframework.com/docs/native/app-preferences#usage
  // https://ionicframework.com/docs/v3/native/app-preferences/
  // https://medium.com/@abhishek.tech/how-to-use-app-preference-in-ionic-3-like-android-sharedprefernce-1f1c67cc3b19
  // https://medium.com/@coderonfleek/debugging-an-ionic-android-app-using-chrome-dev-tools-6e139b79e8d2
}
