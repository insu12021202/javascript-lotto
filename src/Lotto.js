const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkLength(numbers);
    this.checkDuplicate(numbers);
    this.checkRange(numbers);
  }

  checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkDuplicate(numbers) {
    const setNumbers = new Set(numbers);
    if (setNumbers.length !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  checkRange(numbers) {
    numbers.forEach((element) => {
      if (element < 1 || element > 45) {
        throw new Error("[ERROR] 로또 번호는 1~45 범위 내여야 합니다.");
      }
    });
  }
}

module.exports = Lotto;
