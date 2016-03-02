import {Type} from "angular2/core";
import {Page} from "ionic-framework";
import {CardsDeck} from "../../core/classes/cards-deck";

@Page({
  template: require('./cards-table.html')
})
export class CardsTable {
  deck: CardsDeck;

  constructor() {
    this.deck = new CardsDeck();
  }

  reset() {
    this.deck.shuffle();
  }
}
