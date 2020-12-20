import React, { useState } from "react";
import "./styles.css";

// emoji dict
const emojiDict = {
  "❤️": "Love",
  "😊": "Smiling",
  "🥡": "Takeout box",
  "😳": "Disbelief",
  "😑": "Annoyance",
  "😔": "Sad"
};

// arr of keys of emojiDict
var known_emojis = Object.keys(emojiDict);
console.log(known_emojis);

export default function App() {
  // function useState returns array as [variable, function]
  const [meaning, setMeaning] = useState("");
  // check whether typed emoji is present in database
  function emojiChecker(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];
    if (meaning === undefined) {
      meaning = "Emoji not in Database";
    }
    setMeaning(meaning);
  }
  // function useState returns array as [variable, function]
  const [emji, setEmji] = useState("");
  // Display Emoji name when clicked
  function emojiClickHandler(item) {
    // console.log(item);
    setEmji(emojiDict[item]);
  }
  // returning/rendering view
  return (
    <div className="App">
      <h1 id="appTitle">Emoji interpreter</h1>
      <div className="box">
        <h3 className="boxLabel">Enter any Emoji</h3>
        {/* Input Box */}
        <input onChange={emojiChecker}></input>

        {/* Displays Meaning*/}
        <h3 className="ans">{meaning}</h3>
      </div>

      <div className="box">
        {/* label name */}
        <h3 className="boxLabel"> Which Emoji Icon is it? </h3>

        {/* Displaying Emoji keys via map */}
        {known_emojis.map((item) => {
          // key={item} is used to remove key error
          return (
            <span
              id="emojiList"
              // Passing the emoji item to the function
              onClick={() => emojiClickHandler(item)}
              key={item}
            >
              {" "}
              {item}{" "}
            </span>
          );
        })}

        {/* Display clicked Emoji Name */}
        <h3 className="ans"> {emji} </h3>
      </div>
    </div>
  );
}
