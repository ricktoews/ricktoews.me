import { showPortfolioSite } from './helpers';
import "../assets/css/App.scss";

const ArtGames = () => {

    return <>
        <div data-portfolio="art" onClick={showPortfolioSite} className="portfolio-link"><img className="screenshot" src="/images/screenshot-art.png" /></div>

        <p>This is an art gallery game. The purpose is to help the user become familiar with paintings considered to be among the great works of art. I think the idea came to me while I was chatting with my brother about identifying music from a passage within it. My idea was to make a game that would show the user a cutout of a painting and challenge the user to identify the painting based on the cutout.</p>
    </>
};

export default ArtGames;
