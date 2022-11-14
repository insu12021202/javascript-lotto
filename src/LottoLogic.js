const LottoStruct = require("./LottoStruct");
const MissionUtils = require("@woowacourse/mission-utils");

class LottoLogic extends LottoStruct {
  makeUserLotto(amount) {
    let lottoArr = [];
    for (let i = 0; i < amount; i++) {
      let lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoArr.push(this.lottoSort(lotto));
    }
    this.printUserLottos(lottoArr);
  }

  lottoSort(lotto) {
    lotto.sort(function (a, b) {
      return a - b;
    });
    return lotto;
  }

  printUserLottos(lottoArr) {
    lottoArr.map((item) => {
      MissionUtils.Console.print(`[${String(item).split(",").join(", ")}]`);
    });
  }
}

module.exports = LottoLogic;
