import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getText } from "./features/reverseText";

function App() {
  const [input, setInput] = useState("");
  const textReverse = useSelector((state) => state.text);
  const dispatch = useDispatch();

  const handeleReverseText = (e) => {
    if (!input) return;
    dispatch(getText(input));
    setInput("");
    e.preventDefault();
  };

  return (
    <div className="App">
      <>
        <h1>Copywrite APP - Montini Franco</h1>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required="required"
            placeholder="Enter Text"
          ></input>
          <button onClick={(e) => handeleReverseText(e)} role="presentation">
            Send
          </button>
        </form>
      </>
      <>
        <h2>Reverse Texts</h2>
        <ul>
          {textReverse.status === "success" ? (
            textReverse.text.map((el) => {
              return (
                <li key={Math.random() * 33 + Date.now()}>
                  <p>{el.text}</p>
                  {el.palindrome ? (
                    <p>"Palindrome!"</p>
                  ) : (
                    <p>"Not palindrome!"</p>
                  )}
                </li>
              );
            })
          ) : (
            <li>
              <p>No texts</p>
            </li>
          )}
        </ul>
      </>
    </div>
  );
}

export default App;
