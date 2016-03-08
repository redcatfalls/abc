import {Card} from "./card";
import {shuffle as shuffleArray} from '../../core/utils/index';

export class CardDeck {
  public cards: Card[] = [];
  private alphabet: string[];
  private colors: string[];

  constructor() {
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.colors = ['c-red', 'c-blue', 'c-lgreen', 'c-dgreen', 'c-viol', 'c-green', 'c-orange'];
    this.generateDeck();
  }

  private generateDeck() {
    this.alphabet.forEach((letter) => {
      this.cards.push(new Card(letter, this.colors[Math.floor(Math.random() * this.colors.length)]));
    });

    return this;
  }

  shuffle() {
    this.cards = shuffleArray(this.cards);

    return this;
  }
}
