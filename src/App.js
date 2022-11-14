const LottoLogic = require("./LottoLogic");
const LottoUI = require("./LottoUI");
const lottoUI = new LottoUI();
const lottoLogic = new LottoLogic();

class App {
  play() {
    lottoUI.getPurchaseAmount();
    lottoUI.callLogic();
    lottoUI.getWinningNumber();
    lottoUI.getBonusNumber();
  }
}

module.exports = App;
