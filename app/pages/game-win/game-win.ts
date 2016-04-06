import {Page, NavController} from "ionic-angular/index";
import {CatAssistant} from "../../components/ui/cat-assistant/cat-assistant.component";

@Page({
  template: require('./game-win.html'),
  directives: [CatAssistant]
})
export class GameWin {
  constructor(private nav: NavController) {
    var letterSound = new MediaService('abc.m4a'); 
    letterSound.sound().play();
  }

  startNewGame() {
    this.nav.popToRoot();
  }
}
