import LottoCalculator from "../model/LottoCalculator.js";
import LottoGenerator from "../model/LottoGenerator.js";
import ConsoleView from "../view/ConsoleView.js";

class LottoController {
  constructor() {
    this.view = new ConsoleView();
    this.calculator = new LottoCalculator();
  }

  async start() {
    this.pulchaseLotto();
  }

  async pulchaseLotto() {
    const pulchasePrice = await this.view.readPulchasePrice();
    this.lottoCount = this.calculator.getLottoCount(pulchasePrice);
    this.view.printPurchase(this.lottoCount);
    for (let i = 0; i < this.lottoCount; i++)
      this.lottoGenerator = new LottoGenerator();
    this.view.printLottos(this.lottoGenerator.getLottos());
  }
}

export default LottoController;
