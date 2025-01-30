import { showPortfolioSite } from './helpers';
import "../assets/css/App.scss";


const WordMage = () => {

    return <>
        <div data-portfolio="wordmage" onClick={showPortfolioSite} className="portfolio-link"><img className="screenshot" src="/images/screenshot-wordmage.png" /></div>

        <p>This reflects my lifelong interest in words--especially those likely to be a bit off the beaten path. The app has a built-in list of several thousand words, which I scraped from a list that someone else made and apparently abandoned. (My source was not the original one.) The user can add new words and also mark words as of no interest, so that they don't remain in active display.</p>

        <p>The landing page of the app shows a random list of words, intentionally unsorted, to give the user something quick and unpredictable to browse. A Refresh button allows the user to get a new selection.</p>

        <p>Each word has a set of buttons (learn, like, meh, tag) to allow the user to organize it in some way. Words marked as “learn” are added to the pool from which the Unscramble area of the app makes its selections.</p>

        <p>A user's customizations are saved in the browser's local storage. However, there is the option to register and thus set up a profile that's accessed via email and password. If a user chooses to register, the customizations are stored in a database and so can be accessed from a different browser.</p>

    </>
};

export default WordMage;
