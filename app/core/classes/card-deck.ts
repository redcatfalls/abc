import {Card} from "./card";
import {shuffle as shuffleArray} from '../../core/utils/index';

export class CardDeck {
  public cards: Card[] = [];
  private alphabet: string[];

  constructor() {
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.generateDeck();
  }

  private generateDeck() {
    this.alphabet.forEach((letter) => {
      this.cards.push(new Card(letter.toUpperCase()));
    });

    return this;
  }

  shuffle() {
    this.cards = shuffleArray(this.cards);

    return this;
  }
}
