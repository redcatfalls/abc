import {shuffle as shuffleArray} from "../../core/utils/utils";
import {AbcCard} from "./abc-card";
import abcCardMap from "./abc-cards-map";

export class AbcCardDeck {
  public cards: Array<AbcCard> = [];

  constructor() {
    this.cards = abcCardMap.slice(0, abcCardMap.length);
  }

  shuffle() {
    this.cards = shuffleArray(this.cards);

    return this;
  }
}
