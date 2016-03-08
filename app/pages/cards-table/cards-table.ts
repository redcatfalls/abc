import {Page, NavController, Alert} from "ionic-framework";
import {CardDeck} from "../../core/classes/card-deck";
import {Card} from "../../core/classes/card";
import {CardDeckService} from "../../core/services/card-deck-service";
import {ComparisonTable} from "../comparison-table/comparison-table";

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

  newGame() {
    let alert = Alert.create({
      title: 'New Game',
      subTitle: 'You are going to start a new game, do you want to continue?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.resetTable();
        }
      }, {
        text: 'No',
        role: 'cancel'
      }]
    });

    this.nav.present(alert);
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
      let alert = Alert.create({
        title: 'Congratulations!',
        subTitle: 'You successfully have finished a game!',
        buttons: [{
          text: 'Start a new game',
          handler: () => {
            this.resetTable();
          }
        }]
      });

      setTimeout(() => {
        this.nav.present(alert);
      }, 100);
    }
  }

  private goToSliderPage() {
    this.nav.push(ComparisonTable, {
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
