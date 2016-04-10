import {Directive, HostListener, Input, OnInit} from "angular2/core";
import {MediaService} from "../core/services/audio.service";

@Directive({
  selector: '[btn-sound]'
})
export class BtnSound implements OnInit {
  private media: MediaService;

  @Input('btn-sound') src: string;

  @HostListener('click')
  onClick() {
    this.playSound()
  }

  ngOnInit(): void {
    this.media = new MediaService(this.src);
  }

  playSound(): void {
    this.media.sound().play();
  }

}
