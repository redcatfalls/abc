export class Card {
  selected: boolean = false;
  guessed: boolean = false;
  mistakenly: boolean = false;
  hidden: boolean = false;
  
  constructor(public title: string, public color: string) {}

  isEqual(card: Card) {
    return this.title === card.title;
  }
}
