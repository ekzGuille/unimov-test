import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { AppPreferences } from "@ionic-native/app-preferences";

import { MapPage } from '../pages/map/map';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TransportServiceProvider } from '../providers/transport-service/transport-service';
import { HttpClientModule } from '@angular/common/http';
import { UserSettingsProvider } from '../providers/user-settings/user-settings';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    ProfilePage,
    SettingsPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    ProfilePage,
    SettingsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TransportServiceProvider,
    Geolocation,
    AppPreferences,
    UserSettingsProvider
  ]
})
export class AppModule {}
