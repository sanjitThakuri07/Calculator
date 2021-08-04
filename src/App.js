import React, { useState, useEffect, useRef } from "react";

import "./app.css";

function App() {
  const [useResult, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function clearHandler(e) {
    e.preventDefault();

    setResult("");
  }

  function backspaceHandler(e) {
    e.preventDefault();

    setResult((prevResult) => {
      return prevResult.slice(0, -1);
    });
  }

  function resultHandler(e) {
    e.preventDefault();

    try {
      // setResult((prevResult) => {
      //   return eval(prevResult).toFixed(2);
      // });
      setResult(eval(useResult).toFixed(2));
    } catch (e) {
      console.log(e);
      setResult("error");
    }
  }

  function handleClickHandler(e) {
    e.preventDefault();

    setResult((prevResult) => {
      return prevResult.concat(e.target.name);
    });

    // console.log(useResult);
  }
  return (
    <div className="calculator">
      <form action="" className="form">
        <input type="text" value={useResult} ref={inputRef} />
      </form>

      <div className="keypad">
        <button onClick={clearHandler} id="clear">
          Clear
        </button>
        <button onClick={backspaceHandler} id="backspace">
          C
        </button>
        <button name="+" onClick={handleClickHandler}>
          +
        </button>
        <button name="7" onClick={handleClickHandler}>
          7
        </button>
        <button name="8" onClick={handleClickHandler}>
          8
        </button>
        <button name="9" onClick={handleClickHandler}>
          9
        </button>
        <button name="-" onClick={handleClickHandler}>
          -
        </button>
        <button name="4" onClick={handleClickHandler}>
          4
        </button>
        <button name="5" onClick={handleClickHandler}>
          5
        </button>
        <button name="6" onClick={handleClickHandler}>
          6
        </button>
        <button name="*" onClick={handleClickHandler}>
          *
        </button>
        <button name="1" onClick={handleClickHandler}>
          1
        </button>
        <button name="2" onClick={handleClickHandler}>
          2
        </button>
        <button name="3" onClick={handleClickHandler}>
          3
        </button>
        <button name="/" onClick={handleClickHandler}>
          /
        </button>
        <button name="0" onClick={handleClickHandler}>
          0
        </button>
        <button name="." onClick={handleClickHandler}>
          .
        </button>

        <button onClick={resultHandler} id="result">
          Result
        </button>
      </div>
    </div>
  );
}

export default App;
