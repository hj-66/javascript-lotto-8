import { WINNING_AMOUNT } from "../utils/constants.js";
import {
  validateBonusRange,
  validateDuplication,
  validateLength,
  validatePrice,
  validateRange,
} from "../utils/validate.js";

class LottoCalculator {
  #lotto_price = 1000;
  #winning_detail = [0, 0, 0, 0, 0];

  #validateNumber(winningNumbers, bonusNumber) {
    validateLength(winningNumbers);
    validateDuplication(winningNumbers);
    validateRange(winningNumbers);
    validateBonusRange(bonusNumber);
  }

  getLottoCount(price) {
    validatePrice(price, this.#lotto_price);
    return Number(price) / this.#lotto_price;
  }

  getReturnRate(price) {
    const totalWinnings = this.#winning_detail.reduce(
      (acc, count, idx) => acc + count * WINNING_AMOUNT[idx],
      0
    );

    if (!price || Number(price) === 0) return "0.0";

    const returnRate = (totalWinnings / Number(price)) * 100;
    return returnRate.toFixed(1);
  }

  getWinningDetail() {
    return [...this.#winning_detail];
  }

  matchNumbers(lottoNumbers, winningNumbers, bonusNumber) {
    this.#validateNumber(winningNumbers, bonusNumber);
    const winningSet = new Set(winningNumbers.map((n) => Number(n)));
    const bonus = Number(bonusNumber);

    let matchCount = 0;
    for (const n of lottoNumbers) {
      if (winningSet.has(Number(n))) matchCount += 1;
    }
    const hasBonus = lottoNumbers.some((n) => Number(n) === bonus);

    return { matchCount, hasBonus };
  }

  recordResult(matchCount, hasBonus) {
    if (matchCount < 3) return;

    if (matchCount === 6) {
      this.#winning_detail[4] += 1;
      return;
    }

    if (matchCount === 5 && hasBonus) {
      this.#winning_detail[3] += 1;
      return;
    }

    this.#winning_detail[matchCount - 3] += 1;
  }
}

export default LottoCalculator;
