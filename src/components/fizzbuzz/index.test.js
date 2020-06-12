import { fizzbuzz } from "./index";

describe("fizzbuzz", function () {
  it("should return fizz if divisible by 3", function () {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
  });

  it("should return buzz if divisible by 5", function () {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });
  it("should return fizzbuzz if divisible by 3 and 5", function () {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(30)).toBe("fizzbuzz");
    expect(fizzbuzz(45)).toBe("fizzbuzz");
  });
  it("should return the number if not divisbible by 3 or 5", function () {
    expect(fizzbuzz(7)).toBe(7);
    expect(fizzbuzz(11)).toBe(11);
    expect(fizzbuzz(17)).toBe(17);
  });
});
// expect(fizzbuzz() toBe("Fizz"));
