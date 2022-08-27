import React, { useState, useEffect } from "react";
import "./QuoteBox.scss";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

function QuoteBox() {
  let [quotes, setQuotes] = useState([]);

  useEffect(() => {
    newQuote();
  }, []);

  function newQuote() {
    let colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    let theRandomNumber = Math.floor(Math.random() * 11);

    let app = document.querySelector(".app");
    let quoteBox = document.querySelector("#quote-box");
    let tweetQuote = document.querySelector("#tweet-quote");
    let newQuote = document.querySelector("#new-quote");

    app.style.backgroundColor = colors[theRandomNumber];
    quoteBox.style.color = colors[theRandomNumber];
    tweetQuote.style.backgroundColor = colors[theRandomNumber];
    newQuote.style.backgroundColor = colors[theRandomNumber];

    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setQuotes(response.quotes[Math.floor(Math.random() * 101)]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id="quote-box">
      <p id="text">
        <FaQuoteLeft /> {quotes.quote}
      </p>
      <p id="author">- {quotes.author}</p>
      <div className="buttons">
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
          <FaTwitter />
        </a>
        <button id="new-quote" onClick={newQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
