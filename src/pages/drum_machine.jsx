import React from "react";

export const Drummachine = () => {
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
        <div className="pad-bank">
          <div
            className="drum-pad"
            id="Heater-1"
            style="background-color: grey; margin-top: 10px; box-shadow: black 3px 3px 5px;"
          >
            <audio
              className="clip"
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
            Q
          </div>
          <div
            className="drum-pad"
            id="Heater-2"
            style="background-color: grey; margin-top: 10px; box-shadow: black 3px 3px 5px;"
          >
            <audio
              className="clip"
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ></audio>
            W
          </div>
          <div
            className="drum-pad"
            id="Heater-3"
            style="background-color: grey; margin-top: 10px; box-shadow: black 3px 3px 5px;"
          >
            <audio
              className="clip"
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ></audio>
            E
          </div>
          <div
            className="drum-pad"
            id="Heater-4"
            style="background-color: grey; margin-top: 10px; box-shadow: black 3px 3px 5px;"
          >
            <audio
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ></audio>
            A
          </div>
          <div
            className="drum-pad"
            id="Clap"
            style="background-color: grey; margin-top: 10px; box-shadow: black 3px 3px 5px;"
          >
            <audio
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ></audio>
            S
          </div>
          <div
            className="drum-pad"
            id="Open-HH"
            style="background-color: grey; margin-top: 10px; box-shadow: black 3px 3px 5px;"
          >
            <audio
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ></audio>
            D
          </div>
          <div
            className="drum-pad"
            id="Kick-n'-Hat"
            style="background-color: grey; margin-top: 10px; box-shadow: black 3px 3px 5px;"
          >
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
            Z
          </div>
          <div
            className="drum-pad"
            id="Kick"
            style="background-color: grey; margin-top: 10px; box-shadow: black 3px 3px 5px;"
          >
            <audio
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ></audio>
            X
          </div>
          <div
            className="drum-pad"
            id="Closed-HH"
            style="background-color: grey; margin-top: 10px; box-shadow: black 3px 3px 5px;"
          >
            <audio
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ></audio>
            C
          </div>
        </div>
        <div className="logo">
          <div className="inner-logo ">FCC&nbsp;</div>
          <i className="inner-logo fa fa-free-code-camp"></i>
        </div>
        <div className="controls-container">
          <div className="control">
            <p>Power</p>
            <div className="select">
              <div className="inner" style="float: right;"></div>
            </div>
          </div>
          <p id="display">Clap</p>
          <div className="volume-slider">
            <input max="1" min="0" step="0.01" type="range" value="0.37" />
          </div>
          <div className="control">
            <p>Bank</p>
            <div className="select">
              <div className="inner" style="float: left;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
