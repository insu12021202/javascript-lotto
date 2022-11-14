const Lotto = require("./Lotto");
const LottoStruct = require("./LottoStruct");
const MissionUtils = require("@woowacourse/mission-utils");

class LottoUI extends LottoStruct {
  getPurchaseAmount() {
    MissionUtils.Console.readLine("로또 구매 가격을 입력하세요. ", (input) => {
      if (input % 1000 === 0) {
        MissionUtils.Console.print(`${input / 1000}개를 구매했습니다.`);
        this.purcahseAmount = input / 1000;
      }
      throw new Error("[ERROR] 구입 금액은 1000 단위여야 합니다.");
    });
  }

  getBonusNumber() {
    MissionUtils.Console.readLine("보너스 숫자를 입력하세요.", (input) => {
      this.bonusNum = Number(input);
    });
  }

  getWinningNumber() {
    MissionUtils.Console.readLine("로또 당첨 번호를 입력하세요.", (input) => {
      this.winningNum = input.split(",");
    });
    new Lotto(this.winningNum);
  }
}

module.exports = LottoUI;
