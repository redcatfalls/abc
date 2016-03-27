import {Page, NavParams, NavController} from "ionic-angular/index";
import {getRandomVal} from "../../core/utils/utils";
import {AbcCard} from "../../core/classes/abc-card";
import {CatBrief} from "../../core/classes/cat/cat-brief";
import {CatAssistant} from "../../components/ui/cat-assistant/cat-assistant.component";

@Page({
  template: require('./guessed-card.html'),
  directives: [CatAssistant]
})
export class GuessedCard {
  public card: AbcCard;
  public cat: CatBrief;
  public image: string;
  
  constructor(params: NavParams, public nav: NavController) {
    this.card = params.get('card');
    this.cat = GuessedCard.getRandomCat(this.card);
    this.image = this.cat.getRandomImage()
  }

  guessNewCard() {
    this.nav.popToRoot();
  }
  
  /**
   * Returns random cat
   * @returns {CatBrief}
   */
  static getRandomCat(card: AbcCard) {
    return getRandomVal(card.prop.cats);
  }
}
