import { Injectable } from "@angular/core";
import { UserPreferences } from "../../models/user-preferences";

@Injectable()
export class UserSettingsProvider {
  usrPref: UserPreferences;

  constructor() {
    this.usrPref = new UserPreferences();
  }

  getUserPreferences(): UserPreferences {
    return this.usrPref;
  }

  setUserPreferences(userPreferences: UserPreferences): void {
    this.usrPref = userPreferences;
  }
}
