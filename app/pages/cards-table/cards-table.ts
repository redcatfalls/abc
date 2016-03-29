import {Page, NavController, Alert} from "ionic-angular";
import {CardDeckService} from "../../core/services/card-deck-service";
import {ComparisonTable} from "../comparison-table/comparison-table";
import {AbcCardDeck} from "../../core/classes/abc-card-deck";
import {AbcCard} from "../../core/classes/abc-card";
import {CardGuessable} from "../../core/classes/card-guessable";
import {CatAssistant} from "../../components/ui/cat-assistant/cat-assistant.component";
import {BtnSound} from "../../directives/btn-sound";
import {GameProgressService} from "../../core/services/game-progress-service";

@Page({
  template: require('./cards-table.html'),
  directives: [CatAssistant, BtnSound]
})
export class CardsTable {
  deck: AbcCardDeck;
  selectedCard: AbcCard;

  constructor(private nav: NavController, private cardDeckService: CardDeckService, private gp: GameProgressService) {
    this.deck = cardDeckService.initialDeck;
  }

  selectCard(card: AbcCard) {
    this.resetSelected();
    this.makeCardSelected(card);
    this.goToNextPage();
  }

  newGame() {
    let alert = Alert.create({
      title: 'New Game',
      subTitle: 'You are going to start a new game, do you want to continue?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.gp.newGame();
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
    if (this.gp.isFinished()) {
      this.gp.newGame();
      return this.resetTable();
    }
    
    this.cardDeckService.resetMistakenly();
  }

  private goToNextPage() {
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
