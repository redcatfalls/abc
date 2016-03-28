import {Directive} from "angular2/core";
import {MediaService} from "../core/services/audio.service";

@Directive({
  selector: '[btn-sound]',
  properties: [
    'src: btn-sound'
  ],
  host: {
    '(click)': 'playSound()'
  }
})
export class BtnSound {
  private media: MediaService;
  private src: string;

  ngOnInit(): void {
    this.media = new MediaService(this.src);
  }

  playSound(): void {
    this.media.sound().play();
  }

}
