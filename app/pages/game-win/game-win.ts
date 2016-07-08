import {Page, NavController} from "ionic-angular/index";
import {CatAssistant} from "../../components/ui/cat-assistant/cat-assistant.component";
import {MediaService} from "../../core/services/audio.service";

@Page({
  template: require('./game-win.html'),
  directives: [CatAssistant]
})
export class GameWin {
  mediaWin: MediaService;

  constructor(private nav: NavController) {
    this.mediaWin = new MediaService('abc.m4a');
    this.mediaWin.sound().play();
  }

  startNewGame() {
    this.nav.popToRoot();
  }
}
