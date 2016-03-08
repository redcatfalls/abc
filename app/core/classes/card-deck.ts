import {Card} from "./card";
import {shuffle as shuffleArray} from '../../core/utils/index';

export class CardDeck {
  public cards: Card[] = [];
  private alphabet: string[];

  constructor() {
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.generateDeck();
  }

  private generateDeck() {
    this.alphabet.forEach((letter) => {
      this.cards.push(new Card(letter));
    });

    return this;
  }

  shuffle() {
    this.cards = shuffleArray(this.cards);

    return this;
  }
}
