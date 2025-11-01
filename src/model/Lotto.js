import { MESSAGES } from "../utils/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MESSAGES.ERROR.ERROR_QUANTITY_LIMIT);
    }

    const numbersSet = new Set(numbers);

    if (numbers.length !== numbersSet.size) {
      throw new Error(MESSAGES.ERROR.ERROR_NUMBER_DUPLICATION);
    }

    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(MESSAGES.ERROR.ERROR_NUMBER_LIMIT);
      }
    })
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
