const LottoStruct = require("./LottoStruct");

class LottoLogic extends LottoStruct {
  makeUserLotto(num) {
    let lottoArr = [];
    for (let i = 0; i < num; i++) {
      let lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoArr.push(this.lottoSort(lotto));
    }
    return lottoArr;
  }

  lottoSort(lotto) {
    lotto.sort(function (a, b) {
      return a - b;
    });
    return lotto;
  }
}

module.exports = LottoLogic;
