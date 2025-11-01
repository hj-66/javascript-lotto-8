import { WINNING_AMOUNT } from "../utils/constants.js";

class LottoCalculator {
  #lottoPrice = 1000;
  #winningDetail = [0, 0, 0, 0, 0];

  getLottoCount(price) {
    const lottocount = price / this.#lottoPrice;
    return lottocount;
  }

  getReturnRate(price) {
    const totalWinnings = 0;
    this.#winningDetail.forEach((winning, index) => {
      totalWinnings += winning * WINNING_AMOUNT[index];
    });
    const returnRate = (totalWinnings / price) * 100;
    return returnRate.toFixed(1);
  }

  getWinningDetail() {
    const detail = this.#winningDetail;
    return detail;
  }

  matchNumbers(numbers, winningNumbers, bonusNumber) {
    let count = 0;
    let bonusCount = 0;

    numbers.forEach((number, index) => {
      if (Number(number) === winningNumbers[index]) count++;
      if (Number(number) === bonusNumber) bonusCount++;
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
