import {Page, NavController, NavParams} from "ionic-angular";
import {CardDeckService} from "../../core/services/card-deck-service";
import {AbcCardDeck} from "../../core/classes/abc-card-deck";
import {AbcCard} from "../../core/classes/abc-card";
import {GuessedCard} from "../guessed-card/guessed-card";
import {CatAssistant} from "../../components/ui/cat-assistant/cat-assistant.component";
import {Audio} from "../../core/services/audio.service";

@Page({
  template: require('./comparison-table.html'),
  directives: [CatAssistant]
})
export class ComparisonTable {
  deck: AbcCardDeck;
  card: AbcCard;
  nav: NavController;
  sliderOptions: any;
  audioOk: Audio;
  audioFail: Audio;

  constructor(params: NavParams, cardDeckService: CardDeckService, nav: NavController) {
    this.card = params.get('card');
    this.nav = nav;
    this.nav.swipeBackEnabled = true;
    this.deck = cardDeckService.guessedDeck;
    this.sliderOptions = {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 50
    };
    this.audioOk = new Audio('guess.mp3');
    this.audioFail = new Audio('wrong.mp3');
  }

  guessCard(card: AbcCard) {
    if (card.guessed) {
      this.audioFail.play();
      
      return false;
    }

    if (this.card.isEqual(card)) {
      this.audioOk.play();
      
      card.guessed = true;
      this.card.hidden = true;
      this.nav.push(GuessedCard, {
        card: card
      });
    } else {
      this.audioFail.play();

      card.mistakenly = true;
    }
  }
}
