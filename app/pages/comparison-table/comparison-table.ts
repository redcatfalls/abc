import {Page, NavController, NavParams} from "ionic-angular";
import {CardDeckService} from "../../core/services/card-deck-service";
import {AbcCardDeck} from "../../core/classes/abc-card-deck";
import {AbcCard} from "../../core/classes/abc-card";
import {GuessedCard} from "../guessed-card/guessed-card";
import {CatAssistant} from "../../components/ui/cat-assistant/cat-assistant.component";
import {MediaService} from "../../core/services/audio.service";

@Page({
  template: require('./comparison-table.html'),
  directives: [CatAssistant]
})
export class ComparisonTable {
  deck: AbcCardDeck;
  card: AbcCard;
  sliderOptions: any;
  mediaOk: MediaService;
  mediaFail: MediaService;

  constructor(params: NavParams, cardDeckService: CardDeckService, private nav: NavController) {
    this.card = params.get('card');
    this.nav.swipeBackEnabled = true;
    this.deck = cardDeckService.guessedDeck;
    this.sliderOptions = {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 50
    };
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
    } else {
      this.mediaFail.sound().play();

      card.mistakenly = true;
    }
  }
}
