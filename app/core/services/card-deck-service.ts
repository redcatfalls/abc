import {CardDeck} from "../classes/card-deck";
import {Card} from "../classes/card";

export class CardDeckService {
  initialDeck: CardDeck;
  guessedDeck: CardDeck;
  
  constructor() {
    this.init();
  }

  init() {
    this.initialDeck = new CardDeck().shuffle();
    this.guessedDeck = new CardDeck();
  }

  resetMistakenly() {
    this.guessedDeck.cards.forEach((card: Card) => {
      card.mistakenly = false;
    });
  }
  
  isFinished() {
    return this.guessedDeck.cards.filter((card: Card) => !card.guessed).length <= 25;
  }

  reset() {
    this.init();
  }
}
