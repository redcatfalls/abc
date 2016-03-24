import {Page, NavController, Alert} from "ionic-angular";
import {CardDeckService} from "../../core/services/card-deck-service";
import {ComparisonTable} from "../comparison-table/comparison-table";
import {AbcCardDeck} from "../../core/classes/abc-card-deck";
import {AbcCard} from "../../core/classes/abc-card";
import {CardGuessable} from "../../core/classes/card-guessable";
import {CatAssistant} from "../../components/cat-assistant/cat-assistant.component";

@Page({
  template: require('./cards-table.html'),
  directives: [CatAssistant]
})
export class CardsTable {
  deck: AbcCardDeck;
  selectedCard: AbcCard;
  cardDeckService: CardDeckService;

  private nav: NavController;

  constructor(nav: NavController, cardDeckService: CardDeckService) {
    this.nav = nav;
    this.cardDeckService = cardDeckService;
    this.deck = cardDeckService.initialDeck;
  }

  selectCard(card: AbcCard) {
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

  private makeCardSelected(card: AbcCard) {
    card.selected = true;
    this.selectedCard = card;
  }

  private resetSelected() {
    if (this.selectedCard instanceof CardGuessable) {
      this.selectedCard.selected = false;
    }
  }

}
