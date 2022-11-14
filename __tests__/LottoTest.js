const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액(n) 입력 받기", () => {
    mockQuestions(["8000"]);

    const log = "8개를 구매했습니다.";
    const logSpy = getLogSpy();
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.getPurchaseAmount();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  test("로또 구입 금액(n) 입력 받기 예외 상황", () => {
    mockQuestions(["8500"]);
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.getPurchaseAmount();
    }).toThrow("[ERROR]");
  });

  test("로또 번호 뽑기", () => {
    mockQuestions(["8000"]);
    expect(() => {});
  });
});
