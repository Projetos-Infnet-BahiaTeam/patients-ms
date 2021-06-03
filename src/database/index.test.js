const index = require("./index");
const { test, expect } = require("@jest/globals");

test("Connecting Database", async () => {
  const connection = index();
  expect(connection).toBeTruthy();
});
