import React, { useEffect, useRef, useState } from "react";

export const Calculator = () => {
  const [inputValue, setInputValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState(0);

  const getInputValue = (event) => {
    let maskValue = inputValue + event.target.value;
    if (result != "" || (result == 0 && inputValue == 0 && result == ".0")) {
      console.log("entro");
      setResult("");
      setFirstValue("");
      setSecondValue("");
      setInputValue("");
      setOperation("");
      maskValue = event.target.value;
    }

    if (operation === "") {
      setFirstValue(maskValue);
    } else {
      console.log(maskValue.slice(1, maskValue.length));
      setSecondValue(maskValue.slice(1, maskValue.length));
    }

    setInputValue(maskValue);
  };

  const getOperationValue = (value) => {
    if (firstValue === "" && operation === "") {
      setFirstValue(inputValue.split(operation.toString()));
    }
    setInputValue(value);
    setOperation(value);
  };

  const metodoBotonAc = () => {
    setOperation("");
    setInputValue("");
    setFirstValue("");
    setSecondValue("");
    setResult("");
  };

  const metodoBotonesOperacion = (event) => {
    getOperationValue(event.target.value);
  };

  const metodoBotonEqual = () => {
    let op = 0;
    if (operation == "x") {
      op = parseFloat(firstValue) * parseFloat(secondValue);
    } else if (operation == "+") {
      op = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (operation == "-") {
      op = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (operation == "/") {
      op = parseFloat(firstValue) / parseFloat(secondValue);
    }
    op === 0 ? setInputValue(0) : null;
    console.log(op);
    setResult(op);
  };

  // useEffect(() => {
  //   if (operation !== "") {
  //     setSecondValue("");
  //   }
  // }, [operation, secondValue]);

  console.log(
    firstValue,
    "firstValue",
    secondValue,
    "secondValue",
    inputValue,
    "inputValue",
    operation,
    "operation",
    result,
    "result"
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          minHeight: "500px",
          border: "1px solid gray",
          padding: "6px",
          background: "#000",
        }}
      >
        <div
          style={{
            color: "#fff",
            minHeight: "70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "end",
            fontWeight: "700",
          }}
        >
          <span
            style={{
              color: "#e26600",
              fontSize: "20px",
            }}
          >
            {firstValue}
            {operation ? operation : null}
            {secondValue}
          </span>
          <span
            style={{
              color: "#FFF",
              fontSize: "22px",
            }}
          >
            {result ? result : inputValue}
          </span>
        </div>
        <div className="wrapper-calculator">
          <ButtonCalculator
            onClick={metodoBotonAc}
            title={"AC"}
            className={"button-ac"}
            background={"red"}
          />
          <ButtonCalculator onClick={metodoBotonesOperacion} title={"/"} />
          <ButtonCalculator onClick={metodoBotonesOperacion} title={"x"} />
          <ButtonCalculator onClick={getInputValue} title={"6"} />
          <ButtonCalculator onClick={getInputValue} title={"7"} />
          <ButtonCalculator onClick={getInputValue} title={"9"} />
          <ButtonCalculator onClick={metodoBotonesOperacion} title={"-"} />
          <ButtonCalculator onClick={getInputValue} title={"4"} />
          <ButtonCalculator onClick={getInputValue} title={"5"} />
          <ButtonCalculator onClick={getInputValue} title={"6"} />
          <ButtonCalculator onClick={metodoBotonesOperacion} title={"+"} />
          <ButtonCalculator onClick={getInputValue} title={"1"} />
          <ButtonCalculator onClick={getInputValue} title={"2"} />
          <ButtonCalculator onClick={getInputValue} title={"3"} />
          <ButtonCalculator
            onClick={metodoBotonEqual}
            title={"="}
            className={"button-equal"}
          />
          <ButtonCalculator
            onClick={getInputValue}
            title={"0"}
            className={"button-cero"}
          />
          <ButtonCalculator onClick={getInputValue} title={"."} />
        </div>
      </div>
    </div>
  );
};

const ButtonCalculator = ({
  onClick,
  title,
  className,
  background,
  getInputValue,
  getOperationValue,
}) => {
  return (
    <button
      // onClick={(e) => {
      //   if (getOperationValue) {
      //     getOperationValue(e.target.value);
      //     return;
      //   }
      //   getInputValue(e.target.value);
      // }}
      onClick={onClick}
      value={title}
      className={`button-calculadora ${className || ""}`}
      style={{
        color: "#FFF",
        fontWeight: "700",
        fontSize: "22px",
        cursor: "pointer",
        background: background || "gray",
      }}
    >
      {title}
    </button>
  );
};
