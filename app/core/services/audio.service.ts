import {MediaPolyfill} from "../cordova-polyfills/media-polyfill";

export class MediaService {
  private audio: Media;

  constructor(src: string) {
    this.audio = MediaService.getMediaObject(src);
  }

  /**
   *
   * @returns {Media}
   */
  sound(): Media {
    return this.audio;
  }

  /**
   *
   * @param src
   * @returns {any}
   */
  static getMediaObject(src): any {
    if (window['Media']) {
      return new Media(cordova.file.applicationDirectory + 'www/build/sounds/' + src, () => {});
    }

    // fallback to browser implementation
    return new MediaPolyfill('/build/sounds/' + src);
  }

}
