import { Console } from "@woowacourse/mission-utils";
import { MESSAGES, WINNING_NUMBERS_INFORMATION } from "../utils/constants.js";

class ConsoleView {
  async readLottoNumbers() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.");
    return input;
  }

  async readWinningNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    return input;
  }

  async readBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
    return input;
  }

  printPurchase(count) {
    Console.print(count + MESSAGES.OUTPUT.OUTPUT_PURCHASE);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto);
    });
  }

  printStatistics(winningDetail) {
    Console.print(MESSAGES.OUTPUT.OUTPUT_STATISTICS);
    WINNING_NUMBERS_INFORMATION.forEach((information, index) => {
      Console.print(information + winningDetail[index] + "개");
    });
  }

  printReturnRate(returnRate) {
    Console.print(`총 수익률은 ${returnRate}입니다.`);
  }
}

export default ConsoleView;
