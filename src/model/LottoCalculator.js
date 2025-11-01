import { MESSAGES, WINNING_AMOUNT } from "../utils/constants.js";

class LottoCalculator {
  #lottoPrice = 1000;
  #totalWinnings = 0;
  #winningDetail = [0, 0, 0, 0, 0];

  #validate(price) {
    const number = Number(price);
    if (isNaN(number) || number % 1000 !== 0) {
      throw new Error(MESSAGES.ERROR.ERROR_PRICE_NONVALIDATE);
    }
  }

  getLottoCount(price) {
    this.#validate(price);
    const lottocount = price / this.#lottoPrice;
    return lottocount;
  }

  getReturnRate(price) {
    this.#winningDetail.forEach((winning, index) => {
      this.#totalWinnings =
        this.#totalWinnings + winning * WINNING_AMOUNT[index];
    });
    const returnRate = (this.#totalWinnings / price) * 100;
    return returnRate.toFixed(1);
  }

  getWinningDetail() {
    const detail = this.#winningDetail;
    return detail;
  }

  matchNumbers(numbers, winningNumbers, bonusNumber) {
    let count = 0;
    let bonusCount = 0;
    console.log(numbers);
    numbers.forEach((number) => {
      if (winningNumbers.includes(String(number))) count++;
      if (number == bonusNumber) bonusCount++;
    });

    return [count, bonusCount];
  }

  setWinningDetail(count, bonusCount) {
    if (count === 6) count++;
    if (count === 5 && bonusCount === 1) count++;

    this.#winningDetail[count - 3]++;
  }
}

export default LottoCalculator;
