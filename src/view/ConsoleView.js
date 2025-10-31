import { Console } from "@woowacourse/mission-utils";

class ConsoleView {
    async readLottoNumber() {
        const input = await Console.readLineAsync('구입금액을 입력해 주세요.');
        return input;
    }
}

export default ConsoleView;