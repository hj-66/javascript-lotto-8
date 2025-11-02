import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGenerator {
  #lottos = [];

  constructor() {
    this.#lottos = [];
  }

  #generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  generate() {
    const lotto = new Lotto(this.#generateRandomNumbers());
    this.#lottos.push(lotto);
  }

  generateMultiple(count) {
    for (let i = 0; i < count; i++) {
      this.generate();
    }
  }

  getLottos() {
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }
}

export default LottoGenerator;
