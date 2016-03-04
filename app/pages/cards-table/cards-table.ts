import {Page, NavController, Alert} from "ionic-framework";
import {CardDeck} from "../../core/classes/card-deck";
import {Card} from "../../core/classes/card";
import {CardsSlider} from '../cards-slider/cards-slider';
import {CardDeckService} from "../../core/services/card-deck-service";

@Page({
  template: require('./cards-table.html')
})
export class CardsTable {
  deck: CardDeck;
  selectedCard: Card;
  cardDeckService: CardDeckService;

  private nav: NavController;

  constructor(nav: NavController, cardDeckService: CardDeckService) {
    this.nav = nav;
    this.cardDeckService = cardDeckService;
    this.deck = cardDeckService.initialDeck;
  }

  selectCard(card: Card) {
    this.resetSelected();
    this.makeCardSelected(card);
    this.goToSliderPage();
  }

  resetTable() {
    this.cardDeckService.reset();
    this.deck = this.cardDeckService.initialDeck;
    this.deck.shuffle();
  }

  onPageWillEnter() {
    this.cardDeckService.resetMistakenly();
  }

  onPageDidEnter() {
    if (this.cardDeckService.isFinished()) {
      // let alert = Alert.create({
      //   title: 'Congratulations!',
      //   subTitle: 'You successfully have finished a game!',
      //   buttons: [{
      //     text: 'Start new game',
      //     handler: () => {
      //       this.resetTable();
      //     }
      //   }]
      // });
      //
      // this.nav.present(alert);
    }
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
