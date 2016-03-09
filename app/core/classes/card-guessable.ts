import {Card} from "./card";

export class CardGuessable extends Card {
  selected: boolean = false;
  guessed: boolean = false;
  mistakenly: boolean = false;
  hidden: boolean = false;

  constructor(public value: string) {
    super(value);
  }

  isEqual(card: Card) {
    return this.value === card.value;
  }
}
