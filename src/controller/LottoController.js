import LottoCalculator from "../model/LottoCalculator.js";
import LottoGenerator from "../model/LottoGenerator.js";
import ConsoleView from "../view/ConsoleView.js";

class LottoController {
  #lottos;
  #view;
  #calculator;
  #lottoCount;
  #purchasePrice;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#view = new ConsoleView();
    this.#calculator = new LottoCalculator();
  }

  async start() {
    await this.pulchaseLotto();
    await this.drawWinningNumber();
    this.winningStatistics();
  }

  async pulchaseLotto() {
    this.#purchasePrice = await this.#view.readPurchasePrice();
    this.#lottoCount = this.#calculator.getLottoCount(this.#purchasePrice);
    this.#view.printPurchase(this.#lottoCount);
    this.#lottos = new LottoGenerator();
    for (let i = 0; i < this.#lottoCount - 1; i++)
      this.#lottos = new LottoGenerator();
    this.#view.printLottos(this.#lottos.getLottos());
  }

  async drawWinningNumber() {
    this.#winningNumbers = await this.#view.readWinningNumbers();
    this.#bonusNumber = await this.#view.readBonusNumber();
    this.#lottos.getLottos().forEach((lotto) => {
      const [count, bonuscount] = this.#calculator.matchNumbers(
        lotto,
        this.#winningNumbers,
        this.#bonusNumber
      );
      this.#calculator.setWinningDetail(count, bonuscount);
    });
  }

  winningStatistics() {
    this.#view.printStatistics(this.#calculator.getWinningDetail());
    this.#view.printReturnRate(
      this.#calculator.getReturnRate(this.#purchasePrice)
    );
  }
}

export default LottoController;
