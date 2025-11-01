import { Console } from "@woowacourse/mission-utils";
import LottoController from "./controller/LottoController.js";

class App {
  async run() {
    try {
      const controller = new LottoController();
      await controller.start();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
