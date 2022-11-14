const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getPurchaseAmount() {
    MissionUtils.Console.readLine("", (input) => {
      if (input % 1000 === 0) {
        MissionUtils.Console.print(`${input / 1000}개를 구매했습니다.`);
        return input / 1000;
      }
      throw new Error("[ERROR] 구입 금액은 1000 단위여야 합니다.");
    });
  }

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

  // TODO: 추가 기능 구현
}

const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
console.log(lotto.makeUserLotto(8));
module.exports = Lotto;
