import {Directive} from "angular2/core";
import {Audio} from "../core/services/audio.service";

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
  private audio: Audio;
  private src: string;

  ngOnInit() {
    this.audio = new Audio(this.src);
  }

  playSound() {
    this.audio.play();
  }

}
