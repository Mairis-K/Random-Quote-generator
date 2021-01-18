import React, { useEffect, useState } from "react";
import "./App.css";
import { TiArrowSync } from "react-icons/ti";
import { VscArrowSmallRight } from "react-icons/vsc";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [gendre, setGenre] = useState("");

  const quotesData = async () => {
    let allQuotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random/");
      allQuotes = data.data;
      console.log(allQuotes);
    } catch (i) {
      console.log(i);
    }
    try {
      setQuote(allQuotes.content);
      setAuthor(allQuotes.author);
      setGenre(allQuotes.tags[0]);
    } catch (i) {
      console.log(i);
    }
  };

  // const allQuoteAuthor = async () => {
  //   let allQuotes = [];
  //   try {
  //     const data = await axios.get("https://api.quotable.io/authors/");
  //     allQuotes = data;
  //     console.log(allQuotes);
  //   } catch (i) {
  //     console.log(i);
  //   }
  // }


  useEffect(() => {
    quotesData();
  }, []);



  
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="button-wrapper">
            <button className="button" onClick={quotesData}>
              random <TiArrowSync />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="text">{quote}</div>
          </div>
          <div className="big-button">
            <div>
              <div className="author-text">{author}</div>
              <div className="gendre-text">{gendre}</div>
            </div>
            <div className='button-icon'>
              <VscArrowSmallRight size='40px'className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
