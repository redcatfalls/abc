import {AbcCardDeck} from "../classes/abc-card-deck";
import {AbcCard} from "../classes/abc-card";

export class CardDeckService {
  initialDeck: AbcCardDeck;
  guessedDeck: AbcCardDeck;
  
  constructor() {
    this.init();
  }

  init() {
    this.initialDeck = new AbcCardDeck().shuffle();
    this.guessedDeck = new AbcCardDeck();
  }

  resetMistakenly() {
    this.guessedDeck.cards.forEach((card: AbcCard) => {
      card.mistakenly = false;
    });
  }
  
  isFinished() {
    return this.guessedDeck.cards.filter((card: AbcCard) => card.guessed).length >= this.guessedDeck.cards.length;
  }

  reset() {
    this.init();
  }
}
