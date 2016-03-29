import {Page, NavController, NavParams} from "ionic-angular";
import {CardDeckService} from "../../core/services/card-deck-service";
import {AbcCardDeck} from "../../core/classes/abc-card-deck";
import {AbcCard} from "../../core/classes/abc-card";
import {GuessedCard} from "../guessed-card/guessed-card";
import {CatAssistant} from "../../components/ui/cat-assistant/cat-assistant.component";
import {MediaService} from "../../core/services/audio.service";
import {GameWin} from "../game-win/game-win";
import {GameProgressService} from "../../core/services/game-progress-service";

@Page({
  template: require('./comparison-table.html'),
  directives: [CatAssistant]
})
export class ComparisonTable {
  deck: AbcCardDeck;
  card: AbcCard;
  mediaOk: MediaService;
  mediaFail: MediaService;

  constructor(params: NavParams, private cardDeckService: CardDeckService, private nav: NavController, private gp: GameProgressService) {
    this.card = params.get('card');
    this.nav.swipeBackEnabled = true;
    this.deck = cardDeckService.guessedDeck;
    this.mediaOk = new MediaService('guess.mp3');
    this.mediaFail = new MediaService('wrong.mp3');
  }

  guessCard(card: AbcCard): void {
    if (card.guessed) {
      this.mediaFail.sound().play();
      
      return;
    }

    if (this.card.isEqual(card)) {
      this.mediaOk.sound().play();
      
      card.guessed = true;
      this.card.hidden = true;
      this.nav.push(GuessedCard, {
        card: card
      });

      if (this.cardDeckService.isAllCardsGuessed()) {
        this.gp.finishGame();
        this.nav.push(GameWin);
      }
    } else {
      this.mediaFail.sound().play();

      card.mistakenly = true;
    }
  }
}
