import { Console } from "@woowacourse/mission-utils";
import { MESSAGES, WINNING_NUMBERS_INFORMATION } from "../utils/constants.js";

class ConsoleView {
  async readPurchasePrice() {
    const input = await Console.readLineAsync(MESSAGES.INPUT.INPUT_PRICE);
    return input;
  }

  async readWinningNumbers() {
    const input = await Console.readLineAsync(
      MESSAGES.INPUT.INPUT_WINNING_NUMBERS
    );
    const input_split = input.split(",").map((num) => Number(num.trim()));
    return input_split;
  }

  async readBonusNumber() {
    const input = await Console.readLineAsync(
      MESSAGES.INPUT.INPUT_BONUS_NUMBER
    );
    return input;
  }

  printPurchase(count) {
    Console.print("");
    Console.print(count + MESSAGES.OUTPUT.OUTPUT_PURCHASE);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  printStatistics(winningDetail) {
    Console.print(MESSAGES.OUTPUT.OUTPUT_STATISTICS);
    WINNING_NUMBERS_INFORMATION.forEach((information, index) => {
      Console.print(information + winningDetail[index] + "개");
    });
  }

  printReturnRate(returnRate) {
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default ConsoleView;
