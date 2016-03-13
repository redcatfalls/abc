// TODO require only on dev env
require('appCore/../../plugins/cordova-plugin-screen-orientation/www/screenorientation');

export class ScreenOrientation {
  static isForced: boolean = false;

  static forceLandscape(): void {
    this.lockOrientation('landscape');

    if (!this.isForced) {
      window.addEventListener('orientationchange', onOrientationChange.bind(this), false);
      document.addEventListener('resume', onOrientationChange.bind(this));
    }
    
    this.isForced = true;

    function onOrientationChange(): void {
      if (!this.isLandscape()) {
        this.lockOrientation('landscape');
      }
    }
  }

  static isLandscape(): boolean {
    return window.orientation === 90 || window.orientation === -90
  };

  static lockOrientation(orientation: string = 'landscape'): void {
    screen['lockOrientation'](orientation);
  }
  
}
