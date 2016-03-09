import {shuffle as shuffleArray, getRandomVal} from '../../core/utils/utils';
import {AbcCard} from "./abc-card";

export class AbcCardDeck {
  public cards: Array<AbcCard> = [];
  private alphabet: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  private colors: Array<string> = ['c-red', 'c-blue', 'c-lgreen', 'c-dgreen', 'c-viol', 'c-green', 'c-orange'];

  constructor() {
    this.generateDeck();
  }

  private generateDeck() {
    this.alphabet.forEach((letter) => {
      this.cards.push(new AbcCard(letter, getRandomVal(this.colors)));
    });

    return this;
  }

  shuffle() {
    this.cards = shuffleArray(this.cards);

    return this;
  }
}
