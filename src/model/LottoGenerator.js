import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGenerator {
  static #instance;
  #lottos = [];

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
    this.#lottos.push(new Lotto(numbers));
  }

  getLottos() {
    return [...this.#lottos.map((lotto) => lotto.getNumbers())];
  }
}

export default LottoGenerator;
