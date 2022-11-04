import React, { useState } from "react";
import GameBox from "../components/Game/GameBox";
import Options from "../components/Options/Options";
import "./game.css";

const Game = () => {
  const [quote, setQuote] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor bibendum volutpat. Quisque pretium odio quis ex accumsan, non pulvinar tellus vestibulum. In diam lacus, volutpat rhoncus vestibulum sed, ornare sit amet turpis. Aliquam quis suscipit elit. Aenean gravida odio."
  );

  return (
    <>
      <GameBox quote={quote} />
      <Options setQuote={setQuote} />
    </>
  );
};

export default Game;
