import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { mockDeck } from "../__mocks__/mockDeckData";

const { Game } = require("../Game");

describe("blackjack", () => {
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

    const firstScore = await screen.findAllByTestId("score");
    const firstScoreTextContent = firstScore[0]["textContent"];

    const button = screen.getByTestId("hitButton");

    fireEvent.click(button);

    const secondScore = await screen.findAllByTestId("score");
    const secondScoreTextContent = secondScore[0]["textContent"];

    expect(firstScoreTextContent).not.toBe(secondScoreTextContent);
  });

  test("renders no additional cards when the player chooses to stand", async () => {
    render(<Game />);
    const button = screen.getByTestId("standButton");
    fireEvent.click(button);
    const items = await screen.findAllByTestId("playerCardImage");
    expect(items).toHaveLength(2);
  });

  test("renders the message 'bust!' if the player's score is greater than 21", async () => {
    render(<Game />);
    const hitButton = screen.getByTestId("hitButton");

    fireEvent.click(hitButton);

    const item = await screen.findAllByTestId("score");
    const textContent = item[0]["textContent"];
    const score = textContent.split(" ").pop() * 1;

    const message = await screen.findAllByTestId("message");
    const outcomeMessage = message[0]["textContent"];

    score > 21
      ? expect(outcomeMessage).toBe("Bust!")
      : expect(outcomeMessage).not.toBe("Bust!");
  });

  // test("Renders a score of 21 if a king and an ace are drawn", async () => {
  // });
  // test("Renders a score of 21 if a king, a queen and an ace are drawn", async () => {
  // });
  // test("Renders a score of 21 if a nine, an ace and another ace are drawn", async () => {
  // });
});
