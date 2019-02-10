import { Injectable } from '@angular/core';
import { UserPreferences } from "../../models/user-preferences";

/*
  Generated class for the UserSettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserSettingsProvider {

  constructor(private userPreferences:UserPreferences) {
    
  }

}
