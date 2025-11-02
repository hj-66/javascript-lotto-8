import { MESSAGES, WINNING_AMOUNT } from "../utils/constants.js";

class LottoCalculator {
  #lotto_price = 1000;
  #winning_detail = [0, 0, 0, 0, 0];

  #validatePrice(price) {
    const number = Number(price);
    if (
      Number.isNaN(number) ||
      number <= 0 ||
      number % this.#lotto_price !== 0
    ) {
      throw new Error(MESSAGES.ERROR.ERROR_PRICE_NONVALIDATE);
    }
  }

  getLottoCount(price) {
    this.#validatePrice(price);
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

    const index = matchCount - 3;
    this.#winning_detail[index] += 1;
  }
}

export default LottoCalculator;
