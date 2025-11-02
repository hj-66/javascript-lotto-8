import { MESSAGES } from "./constants.js";

export const validateLength = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error(MESSAGES.ERROR.ERROR_QUANTITY_LIMIT);
  }
};

export const validateDuplication = (numbers) => {
  const unique = new Set(numbers);
  if (unique.size !== numbers.length) {
    throw new Error(MESSAGES.ERROR.ERROR_NUMBER_DUPLICATION);
  }
};

export const validateRange = (numbers) => {
  numbers.forEach((number) => {
    if (number < 1 || number > 45) {
      throw new Error(MESSAGES.ERROR.ERROR_NUMBER_LIMIT);
    }
  });
};

export const validateBonusRange = (number) => {
  if (number < 1 || number > 45) {
    throw new Error(MESSAGES.ERROR.ERROR_NUMBER_LIMIT);
  }
};

export const validatePrice = (price, lotto_price) => {
  const number = Number(price);
  if (Number.isNaN(number) || number <= 0 || number % lotto_price !== 0) {
    throw new Error(MESSAGES.ERROR.ERROR_PRICE_NONVALIDATE);
  }
};
