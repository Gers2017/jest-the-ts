import { sum } from "./sum";

test("should return 20", () => {
  expect(sum(10, 10)).toBe(20);
});

test("should return -120", () => {
  expect(sum(10, -130)).toBe(-120);
});
