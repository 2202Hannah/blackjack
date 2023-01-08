# Blackjack Game

Blackjack, otherwise known as Twenty-One, Vingt-et-Un, or Pontoon, is a classic card game, approximately 250 years old. I have written this code for a technical assessment for the BBC Software Engineering graduate scheme.

I have used ReactJS to build a small app to simulate a hand of blackjack.

I have also written unit tests using Jest and React Testing Library to prove that may code works. [The test file can be found here](</src/components/game/test/index.test.js>)

I have also written tests for the deck generator factory function which can be found [here.](/src/components/game/utils.test.js) 

The goal of the game is to get a hand of cards that’s worth as close to 21 points as possible. If a player’s hand goes over 21 points, they have lost.

The player is initially dealt two cards. They may then choose to ‘hit’ (draw a card) or ‘stand’ (stop drawing cards.) If they ‘hit’, then the new card’s value is added to the hand total. If this total exceeds 21, the player is ‘bust’, and loses.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to setup and use the project:

### To FORK and CLONE the repository:

```bash dark
git clone https://github.com/2202Hannah/blackjack
```

### To run locally:

```bash dark
npm start
```

### Dependencies:

node version 18.7.0 minimum

To check you have node installed run:

```bash dark
node --version
```

To install node:

- [node.js](https://nodejs.org/en/download/package-manager/)

## npm Packages

A number of npm packages have been installed to help build this React app. These include:

- [React](https://reactjs.org)

## To run tests

```bash dark
npm test
```