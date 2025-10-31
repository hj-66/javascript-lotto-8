import { Console } from "@woowacourse/mission-utils";

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
}

export default ConsoleView;
