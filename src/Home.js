import { useEffect, useRef, useState } from 'react';
import "./assets/css/App.css";


const Home = (props, state) => {
  const [portfolioItem, setPortfolioItem] = useState('wordmage');

  const handlePortfolioClick = e => {
    const el = e.currentTarget;
    const item = el.id;
    setPortfolioItem(item);
  }

  const showPortfolioSite = e => {
    let url;
    if (portfolioItem === 'wordmage') {
      url = 'https://wordmage.app';
    }
    else if (portfolioItem === 'calendar') {
      url = 'https://calendar.math-toys.app';
    }
    else if (portfolioItem === 'art') {
      url = 'https://art-game.vercel.app';
    }
    if (url) {
      var windowName = "popup";
      var windowFeatures = "width=600,height=450,scrollbars=yes";

      // Open the window
      var newWindow = window.open(url, windowName, windowFeatures);

      if (newWindow) {
        // Center the window
        newWindow.moveTo(
          window.screenX + (window.outerWidth / 2) - (newWindow.outerWidth / 2),
          window.screenY + (window.outerHeight / 2) - (newWindow.outerHeight / 2)
        );

        // Set content (replace this with your actual content or URL)
        newWindow.document.close();
      }
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Rick's Pad</h1>
      </div>
      <div className="content">
        <div className="left-content">
          <div className="portfolio-link" id="wordmage" onClick={handlePortfolioClick}>Wordmage.app</div>
          <div className="portfolio-link" id="calendar" onClick={handlePortfolioClick}>calendar.math-toys.app</div>
          <div className="portfolio-link" id="art" onClick={handlePortfolioClick}>art-game.vercel.app</div>
        </div>
        <div className="divider"></div>
        <div className="right-content">
          <div className="scrollable-content">
            <div className={"portfolio-content " + (portfolioItem === 'wordmage' ? 'active' : '')}>
              <h2>WordMage</h2>
              <div onClick={showPortfolioSite} className="portfolio-link"><img className="screenshot" src="/images/screenshot-wordmage.png" /></div>

              <p>This reflects my lifelong interest in words--especially those likely to be a bit off the beaten path. The app has a built-in list of several thousand words, which I scraped from a list that someone else made and apparently abandoned. (My source was not the original one.) The user can add new words and also mark words as of no interest, so that they don't remain in active display.</p>

              <p>The landing page of the app shows a random list of words, intentionally unsorted, to give the user something quick and unpredictable to browse. A Refresh button allows the user to get a new selection.</p>

              <p>Each word has a set of buttons (learn, like, meh, tag) to allow the user to organize it in some way. Words marked as “learn” are added to the pool from which the Unscramble area of the app makes its selections.</p>

              <p>A user's customizations are saved in the browser's local storage. However, there is the option to register and thus set up a profile that's accessed via email and password. If a user chooses to register, the customizations are stored in a database and so can be accessed from a different browser.</p>
            </div>

            <div onClick={showPortfolioSite} className={"portfolio-content " + (portfolioItem === 'calendar' ? 'active' : '')}>
              <h2>Calendar</h2>
              <div onClick={showPortfolioSite} className="portfolio-link"><img className="screenshot" src="/images/screenshot-calendar.png" /></div>

              <p>Long ago, a math enthusiast showed me how to find the day of the week for a given date, using a 12-digit calendar. I took the concept and developed it further so I could directly calculate the calendar for any year. This app provides a large list of 12-digit calendars and also gives instructions for performing the calculations.</p>

            </div>
            <div onClick={showPortfolioSite} className={"portfolio-content " + (portfolioItem === 'art' ? 'active' : '')}>
              <h2>Art Game</h2>
              <div onClick={showPortfolioSite} className="portfolio-link"><img className="screenshot" src="/images/screenshot-art.png" /></div>

              <p>This is an art gallery game. The purpose is to help the user become familiar with paintings considered to be among the great works of art. I think the idea came to me while I was chatting with my brother about identifying music from a passage within it. My idea was to make a game that would show the user a cutout of a painting and challenge the user to identify the painting based on the cutout.</p>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
