import React, { useState } from 'react';
import quotes from '../RandomQuotesProject-JSBOOTCAMP-Week8Day5-main/QuotesDatabase';

function RandomQuoteGenerator() {
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [textColor, setTextColor] = useState('#000000');
    const [buttonColor, setButtonColor] = useState('#000000');
  
    const getRandomColor = () => {
      const colors = ['#f44336', '#3f51b5', '#4caf50', '#ffeb3b', '#9c27b0'];
      return colors[Math.floor(Math.random() * colors.length)];
    };
  
    const getNewQuote = () => {
      let newQuote;
      do {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      } while (newQuote === currentQuote); 
      setCurrentQuote(newQuote);
      setBackgroundColor(getRandomColor());
      setTextColor(getRandomColor());
      setButtonColor(getRandomColor());
    };
  
    return (
      <div style={{ backgroundColor: backgroundColor, padding: '20px', minHeight: '100vh' }}>
        <h1 style={{ color: textColor }}>{currentQuote.quote}</h1>
        <h2 style={{ color: textColor }}>- {currentQuote.author}</h2>
        <button style={{ backgroundColor: buttonColor, color: textColor }} onClick={getNewQuote}>
          New Quote
        </button>
      </div>
    );
  }
  
  export default RandomQuoteGenerator;