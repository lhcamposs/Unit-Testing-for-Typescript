import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";

describe("PassowrdChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Should do nothing for the moment", () => {
    sut.checkPassword();
  });
});
