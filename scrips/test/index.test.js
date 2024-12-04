/**
 * @jest-environment jsdom
 */

const { game } = require("../index");

beforeAll(() => {
  let fs = require("fs");
  let fileContent = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContent);
  document.close();
});

describe("game object contains correct keys", () => {
  test("score key exists", () => {
    expect("score" in game).toBe(true);
  });
  test("current game key exists", () => {
    expect("currentGame" in game).toBe(true);
  });
  test("player moves key exists", () => {
    expect("playerMoves" in game).toBe(true);
  });
  test("choices key exists", () => {
    expect("choices" in game).toBe(true);
  });
  test("choices contains the correct ids", () => {
    expect(game.choices).toEqual[("button1", "button2", "button3", "button4")];
  });
});

describe("newGame works correctly", () => {
  beforeAll(() => {
    game.score = 42;
    newGame();
  });
  test("should set game score to zero", () => {
    expect(game.score).toEqual(0);
  });
});
