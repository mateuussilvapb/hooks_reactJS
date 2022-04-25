import React, { useState, useEffect } from "react";
import "./Ifoodcounter.css";
export default function Ifoodcounter() {
  const [value, setValue] = useState(1);
  const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");
  useEffect(() => {
    document.getElementById("moeda").innerHTML = 2.0 * value;
  }, [value]);
  function down() {
    if (value <= 1) {
      //Muda CSS
      setButtonStyle("counter-button-minus-desactive");
    }
    if (value > 0) {
      setValue(value - 1);
    }
  }
  function up() {
    setButtonStyle("counter-button-minus-active");
    setValue(value + 1);
  }
  return (
    <div className="countex-wrapper">
      <button onClick={down} className={buttonStyle}>
        -
      </button>
      <p>{value}</p>
      <button onClick={up} className="counter-button-plus-active">
        +
      </button>
      <button id="moeda">12,00</button>
    </div>
  );
}
