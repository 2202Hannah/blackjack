import React, { useState } from "react";

export const WelcomePage = ({ setName }) => {
  const [input, setInput] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    setName(input);
  };

  return (
    <div className="welcomePage">
      <form onSubmit={handleSubmit}>
        <label>Enter your name to begin: </label>
        <input
          required
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <button type="submit">Deal</button>
      </form>
    </div>
  );
};

export default WelcomePage;
