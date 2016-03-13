/// <reference path="../typings/tsd.d.ts" />

import {App, IonicApp, Platform, Alert} from 'ionic-angular';
import {CardsTable} from './pages/cards-table/cards-table';
import {CardDeckService} from "./core/services/card-deck-service";
require('animate.css/source/_base.css');
require('animate.css/source/zooming_entrances/zoomInUp.css');
require('animate.css/source/flippers/flip.css');
// TODO require only on dev env
require('../plugins/cordova-plugin-screen-orientation/www/screenorientation');

declare var navigator: {
  app: {
    exitApp()
  }
};

@App({
  templateUrl: 'build/app.html',
  providers: [CardDeckService],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  // make HelloIonicPage the root (or first) page
  rootPage = CardsTable;
  //pages: Array<{title: string, component: any}>;
  //
  constructor(private app: IonicApp, private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      screen['lockOrientation']('landscape');

      /**
       * Handle Android back button until it implements natively https://github.com/driftyco/ionic/issues/5071
       */
      document.addEventListener('backbutton', () => {
        let nav = this.app.getComponent('nav');

        if (!nav.canGoBack()) {
          let alert = Alert.create({
            title: 'Exit app',
            subTitle: 'Are you sure want to exit?',
            buttons: [{
              text: 'Yes',
              handler: () => {
                navigator.app.exitApp();
              }
            }, {
              text: 'No',
              role: 'cancel'
            }]
          });

          return nav.present(alert);
        }

        return nav.pop();
      }, false);
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  //openPage(page) {
  //  // close the menu when clicking a link from the menu
  //  this.app.getComponent('leftMenu').close();
  //  // navigate to the new page if it is not the current page
  //  let nav = this.app.getComponent('nav');
  //  nav.setRoot(page.component);
  //}
}
