import {Page, NavParams} from "ionic-framework/index";
import {Card} from "../../core/classes/card";
import {CardsDeck} from "../../core/classes/cards-deck";

@Page({
  template: require('./cards-slider.html')
})
export class CardsSlider {
  deck: CardsDeck;
  card: Card;
  sliderOptions: any;

  constructor(params: NavParams) {
    this.card = params.get('card');
    this.deck = new CardsDeck();
    this.sliderOptions = {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 100
    };
  }
}
