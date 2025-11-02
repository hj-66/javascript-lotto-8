import { MESSAGES } from "../utils/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplication(numbers);
    this.#validateRange(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MESSAGES.ERROR.ERROR_QUANTITY_LIMIT);
    }
  }

  #validateDuplication(numbers) {
    const unique = new Set(numbers);
    if (unique.size !== numbers.length) {
      throw new Error(MESSAGES.ERROR.ERROR_NUMBER_DUPLICATION);
    }
  }

  #validateRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(MESSAGES.ERROR.ERROR_NUMBER_LIMIT);
      }
    });
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
