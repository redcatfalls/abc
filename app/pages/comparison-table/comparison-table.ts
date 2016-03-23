import {Page, NavController, NavParams} from "ionic-angular";
import {CardDeckService} from "../../core/services/card-deck-service";
import {AbcCardDeck} from "../../core/classes/abc-card-deck";
import {AbcCard} from "../../core/classes/abc-card";
import {CatAssistant} from "../../components/cat-assistant/cat-assistant.component";

@Page({
  template: require('./comparison-table.html'),
  directives: [CatAssistant]
})
export class ComparisonTable {
  deck: AbcCardDeck;
  card: AbcCard;
  nav: NavController;
  sliderOptions: any;

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
  }

  guessCard(card: AbcCard) {
    if (card.guessed) {
      return false;
    }

    if (this.card.isEqual(card)) {
      card.guessed = true;
      this.card.hidden = true;

      setTimeout(() => {
        this.nav.pop();
      }, 500);
    } else {
      card.mistakenly = true;
    }
  }
}
