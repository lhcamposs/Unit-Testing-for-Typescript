import { toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  test("Should return upppercase", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC");
  });
});
