// TODO require only on dev env
require('appCore/../../plugins/cordova-plugin-screen-orientation/www/screenorientation');

export class ScreenOrientation {
  static isForced: boolean = false;

  static forceLandscape(): void {
    this.lockOrientation('landscape');

    if (!this.isForced) {
      window.addEventListener('orientationchange', this.onOrientationChange, false);
      document.addEventListener('resume', this.onOrientationChange);
    }
    
    this.isForced = true;
  }

  static isLandscape(): boolean {
    return window.orientation === 90 || window.orientation === -90
  };

  static onOrientationChange(): void {
    if (!this.isLandscape()) {
      this.lockOrientation('landscape');
    }
  };

  static lockOrientation(orientation: string = 'landscape'): void {
    screen['lockOrientation'](orientation);
  }
  
}
