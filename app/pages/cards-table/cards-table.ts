import {Page, NavController} from "ionic-framework";
import {CardsDeck} from "../../core/classes/cards-deck";
import {Card} from "../../core/classes/card";
import {CardsSlider} from '../cards-slider/cards-slider';

@Page({
  template: require('./cards-table.html')
})
export class CardsTable {
  deck: CardsDeck;
  selectedCard: Card;

  private nav: NavController;

  constructor(nav: NavController) {
    this.nav = nav;
    this.deck = new CardsDeck();
    this.reset();
  }

  selectCard(card: Card) {
    this.resetSelected();
    this.makeCardSelected(card);
    this.goToSliderPage();
  }

  reset() {
    this.deck.shuffle();
  }

  private goToSliderPage() {
    this.nav.push(CardsSlider, {
      card: this.selectedCard
    });
  }

  private makeCardSelected(card: Card) {
    card.selected = true;
    this.selectedCard = card;
  }

  private resetSelected() {
    if (this.selectedCard instanceof Card) {
      this.selectedCard.selected = false;
    }
  }

}
