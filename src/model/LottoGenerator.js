import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGenerator {
  static #instance;
  #Lottos = [];

  constructor() {
    if (LottoGenerator.#instance) {
      LottoGenerator.#instance.#addLotto();
      return LottoGenerator.#instance;
    }
    this.#addLotto();
    LottoGenerator.#instance = this;
  }

  #generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  #addLotto() {
    const numbers = this.#generateRandomNumbers();
    this.#Lottos.push(new Lotto(numbers));
  }

  getLottos() {
    return [...this.#Lottos.map((lotto) => lotto.getNumbers())];
  }
}

export default LottoGenerator;
