import {CardGuessable} from "./card-guessable";
import {AbcCardProp} from "../interface/abc-card-prop";

export class AbcCard extends CardGuessable {
  constructor(public value: string, public prop: AbcCardProp) {
    super(value);
  }
}
