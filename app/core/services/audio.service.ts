export class Audio {
  public media: Media;

  constructor(src: string) {
    this.media = new Media(cordova.file.applicationDirectory + 'www/build/sounds/' + src, () => {});
  }

  play() {
    this.media.play();
  }

}
