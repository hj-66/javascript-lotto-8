export const MESSAGES = {
  INPUT: {
    INPUT_PRICE: "구입금액을 입력해 주세요.\n",
    INPUT_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
    INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  },

  OUTPUT: {
    OUTPUT_PURCHASE: "개를 구매했습니다.",
    OUTPUT_STATISTICS: "당첨 통계\n---",
  },

  ERROR: {
    ERROR_QUANTITY_LIMIT: "[ERROR] 로또 번호는 6개여야 합니다.",
    ERROR_NUMBER_LIMIT: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  },
};

export const WINNING_AMOUNT = [5000, 50000, 1500000, 30000000, 2000000000];

export const WINNING_NUMBERS_INFORMATION = [
  "3개 일치 (5,000원) - ",
  "4개 일치 (50,000원) - ",
  "5개 일치 (1,500,000원) - ",
  "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  "6개 일치 (2,000,000,000원) - ",
];
