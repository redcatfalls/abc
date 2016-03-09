import {CardGuessable} from "./card-guessable";

export class AbcCard extends CardGuessable {
  constructor(
    public value: string,
    public props: {color: string}
  ) {
    super(value);
  }
}
