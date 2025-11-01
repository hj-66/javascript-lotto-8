class LottoCalculator {
    #lottoprice = 1000;
    #lottocount;

    getLottoCount(price) {
        this.#lottocount = price / this.#lottoprice;
        return this.#lottocount;
    }
}

export default LottoCalculator;