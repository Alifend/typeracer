import React from "react";
import { Button } from "react-bootstrap";
import QuoteServices from "../../services/QuoteServices";
import ModalAux from "../Modal/ModalAux";
import "./options.css";

const Options = ({ setQuote }) => {
  const handleClick = async () => {
    setQuote("");
    const response = await QuoteServices.getQuote();
    const data = response.data;
    setQuote(data[0].quote);
  };
  return (
    <div className="options">
      <Button onClick={handleClick} className="blue btn">
        Randomly choose
      </Button>

      <ModalAux setQuote={setQuote} />
    </div>
  );
};

export default Options;
