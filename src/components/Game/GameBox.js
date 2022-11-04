import { useState, useEffect } from "react";

import "./gameBox.css";

/*
La idea es tener 3 cúmulos de span: 
- El primero corresponde a todas las palabras que fueron ya fueron escritas correctamente y ahora serán verdes
- El segundo es la palabra que se debe escribir actualmente, parto la palabra en caractéres y las muestro individualmente con cierto color dependiendo de ciertas variables
- El tercer span es el resto de palabras que aún faltan por escribir .... paragraph.slice(1, paragraph.length)
*/
const GameBox = ({ quote }) => {
  const [word, setWord] = useState("");
  const [correct, setCorrect] = useState(true);
  const [total, setTotal] = useState(quote);
  const [paragraph, setParagraph] = useState(
    quote.split(" ").map((w) => w + " ")
  );
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    setWord("");
    setCorrect(true);
    setTotal(quote);
    setParagraph(quote.split(" ").map((w) => w + " "));
    setDisplay([]);
  }, [quote]);
  useEffect(() => {
    if (word === paragraph[0]) {
      const temp = paragraph[0];
      setParagraph(paragraph.slice(1));
      setWord("");
      setDisplay((current) => current.concat(temp));
    }
    if (paragraph.length === 0) {
      setCorrect(true);
      console.log("usted ha finalizado");
      setParagraph("You got it!!");
      setDisplay([]);
    } else {
      if (paragraph[0].includes(word)) {
        setCorrect(true);
      } else {
        setCorrect(false);
      }
    }
  }, [word]);

  return (
    <div className="contenedor">
      {quote === "" && <span className="textArea">Loading</span>}
      <div className="texto">
        {display.map((w, index) => (
          <span
            key={index}
            className="textArea"
            style={{ color: "#99CC00" }}
            readOnly
          >
            {w}
          </span>
        ))}
        {paragraph.length > 0 ? (
          paragraph[0].split("").map((w, index) => {
            return (
              <span
                key={index}
                className="textArea"
                style={
                  word[index] == w
                    ? { color: "#99CC00", textDecoration: "underline" } //Verde
                    : word[index] === undefined
                    ? { color: "white", textDecoration: "underline" } // Negro
                    : {
                        backgroundColor: "#F0A3A3",
                        textDecoration: "underline",
                      } // Rojo
                }
                readOnly
              >
                {w}
              </span>
            );
          })
        ) : (
          <span></span>
        )}

        <span className="textArea" readOnly>
          {paragraph.slice(1, paragraph.length)}
        </span>
      </div>
      <input
        style={correct ? {} : { backgroundColor: "#d08383" }}
        type="text"
        className="inputText"
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default GameBox;
