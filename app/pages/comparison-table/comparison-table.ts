import {Page, NavController, NavParams} from "ionic-framework/index";
import {Card} from "../../core/classes/card";
import {CardDeckService} from "../../core/services/card-deck-service";
import {CardDeck} from "../../core/classes/card-deck";

@Page({
  template: require('./comparison-table.html')
})
export class ComparisonTable {
  deck: CardDeck;
  card: Card;
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

  guessCard(card: Card) {
    if (card.guessed) {
      return false;
    }

    if (this.card.isEqual(card)) {
      card.guessed = true;
      this.card.hidden = true;

      setTimeout(() => {
        this.nav.pop();
      }, 100);
    } else {
      card.mistakenly = true;
    }
  }
}
