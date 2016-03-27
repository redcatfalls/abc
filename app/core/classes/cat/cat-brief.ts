import {getRandomVal} from "../../utils/utils";
import {Cat} from "./cat";

export class CatBrief extends Cat {
  constructor(public name: string, public images: Array<string>) {
    super(name);
  }

  /**
   * Returns random image path
   * @returns {string}
   */
  getRandomImage() {
    return getRandomVal(this.images);
  }
}
