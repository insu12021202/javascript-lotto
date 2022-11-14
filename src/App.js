const LottoUI = require("./LottoUI");
const lotto = new LottoUI();

class App {
  play() {
    lotto.getPurchaseAmount();
    lotto.getWinningNumber();
    lotto.getBonusNumber();
  }
}

module.exports = App;
