import React, { useState } from "react";
import Game from "../game";
import WelcomePage from "../welcome-page";
import "./styles.css";

export const Board = () => {
  const [name, setName] = useState("");

  return (
    <div className="board">
      <h1>BLACKJACK</h1>
      {name.length > 0 ? (
        <Game name={name} />
      ) : (
        <WelcomePage setName={setName} />
      )}
    </div>
  );
};

export default Board;
