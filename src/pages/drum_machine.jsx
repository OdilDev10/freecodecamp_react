import React from "react";
import { useState } from "react";

export const Drummachine = () => {
  const [inputVolumen, setInputVolumen] = useState(0.37);
  const [powerButton, setPowerButton] = useState(true);

  const inputVolumenChange = (e) => {
    setInputVolumen(e.target.value);
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "q" || event.key === "Q") {
      let element = document.getElementById("Q");
      element.volume = inputVolumen;
      element.play();
    }
    if (event.key === "w" || event.key === "W") {
      let element = document.getElementById("W");
      element.volume = inputVolumen;
      element.play();
    }
    if (event.key === "e" || event.key === "E") {
      let element = document.getElementById("E");
      element.volume = inputVolumen;
      element.play();
    }
    if (event.key === "a" || event.key === "A") {
      let element = document.getElementById("A");
      element.volume = inputVolumen;
      element.play();
    }
    if (event.key === "s" || event.key === "S") {
      let element = document.getElementById("S");
      element.volume = inputVolumen;
      element.play();
    }
    if (event.key === "d" || event.key === "D") {
      let element = document.getElementById("D");
      element.volume = inputVolumen;
      element.play();
    }
    if (event.key === "z" || event.key === "Z") {
      let element = document.getElementById("Z");
      element.volume = inputVolumen;
      element.play();
    }
    if (event.key === "x" || event.key === "X") {
      let element = document.getElementById("X");
      element.volume = inputVolumen;
      element.play();
    }
    if (event.key === "c" || event.key === "C") {
      let element = document.getElementById("C");
      element.volume = inputVolumen;
      element.play();
    }
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#c4331f",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="inner-container" id="drum-machine">
        <div
          className="pad-bank"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "300px",
              gap: "20px",
            }}
          >
            <ButtonLetter
              powerButton={powerButton}
              title={"Q"}
              inputVolumen={inputVolumen}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}
            />
            <ButtonLetter
              powerButton={powerButton}
              title={"W"}
              inputVolumen={inputVolumen}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}
            />
            <ButtonLetter
              powerButton={powerButton}
              title={"E"}
              inputVolumen={inputVolumen}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}
            />

            <ButtonLetter
              powerButton={powerButton}
              title={"A"}
              inputVolumen={inputVolumen}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}
            />
            <ButtonLetter
              powerButton={powerButton}
              title={"S"}
              inputVolumen={inputVolumen}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}
            />
            <ButtonLetter
              powerButton={powerButton}
              title={"D"}
              inputVolumen={inputVolumen}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}
            />

            <ButtonLetter
              powerButton={powerButton}
              title={"Z"}
              inputVolumen={inputVolumen}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}
            />
            <ButtonLetter
              powerButton={powerButton}
              title={"X"}
              inputVolumen={inputVolumen}
              src={"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}
            />
            <ButtonLetter
              powerButton={powerButton}
              title={"C"}
              inputVolumen={inputVolumen}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{
              outline: "none",
              fontSize: "18px",
              padding: "20px",
              border: "none",
              borderRadius: "20px",
              margin: "20px",
              background: powerButton ? "red" : "green",
              cursor: "pointer",
            }}
            onClick={() => {
              setPowerButton(!powerButton);
            }}
          >
            Power
          </button>
          <div>
            <p id="display">Volumen</p>
            <input
              max="1"
              onChange={inputVolumenChange}
              min="0"
              step="0.01"
              type="range"
              value={inputVolumen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonLetter = ({ inputVolumen, src, title, powerButton }) => {
  return (
    <div
      className="drum-pad"
      style={{
        cursor: "pointer",
        height: "80px",
        width: "80px",
        backgroundColor: "grey",
        marginTop: "10px",
        boxShadow: "3px 3px 5px black",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
      }}
      onClick={(e) => {
        if (powerButton == true) {
          e.target.lastElementChild.volume = inputVolumen;
          e.target.lastElementChild.play();
        }
      }}
    >
      <audio id={title} volume={0} className="clip" src={src}></audio>
      {title}
    </div>
  );
};
