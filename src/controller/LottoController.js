import LottoCalculator from "../model/LottoCalculator.js";
import LottoGenerator from "../model/LottoGenerator.js";
import ConsoleView from "../view/ConsoleView.js";

class LottoController {
  #view;
  #calculator;
  #generator;
  #purchasePrice;
  #lottoCount;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#view = new ConsoleView();
    this.#calculator = new LottoCalculator();
    this.#generator = new LottoGenerator();
  }

  async start() {
    await this.purchaseLottos();
    await this.drawWinningNumbers();
    this.showStatistics();
  }

  async purchaseLottos() {
    this.#purchasePrice = await this.#view.readPurchasePrice();
    this.#lottoCount = this.#calculator.getLottoCount(this.#purchasePrice);

    this.#view.printPurchase(this.#lottoCount);

    this.#generator.generateMultiple(this.#lottoCount);

    this.#view.printLottos(this.#generator.getLottos());
  }

  async drawWinningNumbers() {
    this.#winningNumbers = await this.#view.readWinningNumbers();
    this.#bonusNumber = await this.#view.readBonusNumber();

    this.#generator.getLottos().forEach((lotto) => {
      const { matchCount, bonusMatch } = this.#calculator.matchNumbers(
        lotto,
        this.#winningNumbers,
        this.#bonusNumber
      );
      this.#calculator.recordResult(matchCount, bonusMatch);
    });
  }

  showStatistics() {
    const winningDetail = this.#calculator.getWinningDetail();
    const returnRate = this.#calculator.getReturnRate(this.#purchasePrice);

    this.#view.printStatistics(winningDetail);
    this.#view.printReturnRate(returnRate);
  }
}

export default LottoController;
