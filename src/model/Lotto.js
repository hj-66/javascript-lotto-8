import {
  validateDuplication,
  validateLength,
  validateRange,
} from "../utils/validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateLength(numbers);
    validateDuplication(numbers);
    validateRange(numbers);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
