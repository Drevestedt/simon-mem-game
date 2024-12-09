/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("../index");

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
    game.playerMoves = ["button1", "button2"];
    game.playerMoves = ["button3", "button4"];
    document.getElementById("score").innerText = "42";
    newGame();
  });
  test("should set game score to zero", () => {
    expect(game.score).toEqual(0);
  });
  test("should set player moves to zero", () => {
    expect(game.playerMoves).toEqual(0);
  });
  test("should set current game array to zero", () => {
    expect(game.currentGame).toEqual(0);
  });
  test("should display 0 for the id of score", () => {
    expect(document.getElementById("score").innerText).toEqual(0);
  });
});
