import LottoCalculator from "../model/LottoCalculator.js";
import LottoGenerator from "../model/LottoGenerator.js";
import ConsoleView from "../view/ConsoleView.js";

class LottoController {
  #lottos;
  #view;
  #calculator;
  #lottoCount;

  constructor() {
    this.#view = new ConsoleView();
    this.#calculator = new LottoCalculator();
  }

  async start() {
    await this.pulchaseLotto();
    await this.drawWinningNumber();
  }

  async pulchaseLotto() {
    const pulchasePrice = await this.#view.readPulchasePrice();
    this.#lottoCount = this.#calculator.getLottoCount(pulchasePrice);
    this.#view.printPurchase(this.#lottoCount);
    for (let i = 0; i < this.#lottoCount; i++)
      this.#lottos = new LottoGenerator();
    this.#view.printLottos(this.#lottos.getLottos());
  }

  async drawWinningNumber() {
    const winningNumbers = await this.#view.readWinningNumbers();
    const bonusNumber = await this.#view.readBonusNumber();
    this.#lottos.getLottos().forEach((lotto) => {
      const [count, bonuscount] = this.#calculator.matchNumbers(
        lotto,
        winningNumbers,
        bonusNumber
      );
      this.#calculator.setWinningDetail(count, bonuscount);
    });
  }
}

export default LottoController;
