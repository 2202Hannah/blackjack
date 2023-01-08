import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
//import HiddenMessage from '../hidden-message'
const { Game } = require("../Game");

test("renders two playing cards for the starting hand", async () => {
  render(<Game />);
  const items = await screen.findAllByTestId("playerCardImage");
  expect(items).toHaveLength(2);
});
test("renders one additional playing card when the player selects hit", async () => {
  render(<Game />);
  const button = screen.getByTestId("hitButton");
  fireEvent.click(button);
  const items = await screen.findAllByTestId("playerCardImage");
  expect(items).toHaveLength(3);
});
test("updates the score when a new playing card is added to the hand", async () => {
  render(<Game />);
  const button = screen.getByTestId("hitButton");
  fireEvent.click(button);
  
});

// describe("blackjack game", () => {
//   test("the opening hand should have two cards when it is dealt", () => {
//     Game();
//     expect(playerHand.length).toBe(2);
//   });
//   test("when the player chooses to 'hit' they recieve one additional card", () => {});
//   test("when the player chooses to 'hit' their score is updated", () => {});
//   test("when the player chooses to 'stand' they receive no additional cards and their score is evaluated", () => {});
//   test("when the players score is less than 22 they have a valid hand", () => {});
//   test("when the players score is greater than 21 they have an invalid hand", () => {});
//   test("A king and an ace would have a score of 21", () => {});
//   test("A king, queen and an ace would have a score of 21", () => {});
//   test("A nine, ace and another ace would have a score of 21", () => {});
// });
