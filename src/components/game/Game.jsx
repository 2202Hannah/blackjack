import React, { useState, useEffect } from "react";
import { DeckGenerator } from "./utils";
//import GameStarter from "../gameStarter/GameStarter";

export const Game = ({ name }) => {
  const [score, setScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [cardsInHand, setCardsInHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [message, setMessage] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const [complete, setComplete] = useState(false);

  // create the card deck by running the cardDeckGenerator() function
  const cardDeck = DeckGenerator();

  // I have written a function to generate a random hand of 2 cards which updates the card deck as appropriate
  const randomCardCreator = () => {
    return cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1);
  };

  const startingHand = () => {
    const startingHand = [];
    startingHand.push(randomCardCreator());
    startingHand.push(randomCardCreator());
    return startingHand.flat();
  };

  // HANDLE CLICK BUTTON FOR THE STAND BUTTON
  const handleClickStand = () => {
    if (score > dealerScore) {
      setMessage("You have won!");
    } else if (score === dealerScore) {
      setMessage("It's a draw");
    } else setMessage("Bust!");

    setDisabled(true);
    setComplete(true);
  };

  // HANDLE CLICK FUNCTION FOR THE HIT BUTTON
  const handleClickHit = () => {
    const newCard = randomCardCreator();

    setCardsInHand([...cardsInHand, newCard[0]]);

    if (typeof newCard[0].value !== "string") {
      setScore(score + newCard[0].value);
    } else if (score < 11) {
      setScore(score + 11);
    } else setScore(score + 1);
  };

  // A USE EFFECT HOOK TO UPDATE THE CARDS THAT ARE IN THE PLAYER'S HAND & THE DEALER'S HAND & UPDATES PLAYER SCORE
  useEffect(() => {
    const playerHand = startingHand();
    const dealerStartingHand = startingHand();

    setCardsInHand(playerHand);
    setDealerHand(dealerStartingHand);

    let amountToAdd = 0;

    playerHand.forEach(card => {
      if (typeof card.value !== "string") {
        amountToAdd += card.value;
      } else if (score < 11) {
        amountToAdd += 11;
      } else amountToAdd += 1;
    });

    setScore(score + amountToAdd);
  }, []);

  // A USE EFFECT HOOK TO UPDATE THE DEALER'S SCORE
  useEffect(() => {
    let amountToAddForDealer = 0;

    dealerHand.forEach(card => {
      if (typeof card.value !== "string") {
        amountToAddForDealer += card.value;
      } else if (dealerScore < 11) {
        amountToAddForDealer += 11;
      } else amountToAddForDealer += 1;
    });

    setDealerScore(dealerScore + amountToAddForDealer);
  }, [dealerHand]);

  // A USE EFFECT HOOK TO CHECK WHETHER THE PLAYER'S SCORE IS OVER 21 AND THEREFORE BUST
  useEffect(() => {
    if (score > 21) {
      setMessage("Bust!");
      setDisabled(true);
      setComplete(true);
    }
  }, [score]);

  return (
    <div className="game">
      <div className="dealerWrapper">
        <h3>Dealer</h3>
        {complete && <p>score = {dealerScore}</p>}

        {complete
          ? dealerHand.map(card => {
              return (
                <img
                  data-testid="dealerCardImage"
                  key={`${card.suit} + ${card.value}`}
                  src={require(`../images/${card.img}`)}
                  alt="playing card"
                  width="125"
                  height="150"
                ></img>
              );
            })
          : dealerHand.map((card, index) => {
              if (index === dealerHand.length - 1) {
                return (
                  <img
                    data-testid="dealerCardImage"
                    key={`${card.suit} + ${card.value}`}
                    src={require(`../images/${card.img}`)}
                    alt="playing card"
                    width="125"
                    height="150"
                  ></img>
                );
              } else
                return (
                  <img
                    data-testid="dealerCardImage"
                    key={`${card.suit} + ${card.value}`}
                    src={require(`../images/back_of_card.png`)}
                    alt="playing card"
                    width="125"
                    height="150"
                  ></img>
                );
            })}
      </div>

      <div className="playerWrapper">
        <h3>{name}</h3>
        <p data-testid="score">
          {complete ? `score = ${score}` : `Your current score is ${score}`}
        </p>
        {cardsInHand.map(card => {
          return (
            <img
              data-testid="playerCardImage"
              key={`${card.suit} + ${card.value}`}
              src={require(`../images/${card.img}`)}
              alt="playing card"
              width="125"
              height="150"
            ></img>
          );
        })}
      </div>

      <div className="footer">
        <p data-testid="message">{message}</p>
        <button
          data-testid="hitButton"
          onClick={handleClickHit}
          disabled={isDisabled}
        >
          Hit
        </button>
        <button
          data-testid="standButton"
          onClick={handleClickStand}
          disabled={isDisabled}
        >
          Stand
        </button>
        <button
          data-testid="newGameButton"
          onClick={() => window.location.reload()}
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default Game;
