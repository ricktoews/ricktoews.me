import "./assets/css/App.scss";
import { Link } from "react-router-dom";
import CustomButton from './components/CustomButton';

function PortfolioMenu(props) {
    return <>
        <div className="portfolio-menu-heading">
            PORTFOLIO
        </div>
        <div className="portfolio-links">
            <div className="portfolio-link" id="grading-assistant"><Link to="/portfolio/grading-assistant">AI Grading Assistant</Link></div>

            <div className="portfolio-link" id="math-toys-api"><Link to="/portfolio/math-toys-api">api.math-toys.app</Link></div>
            <div className="portfolio-link" id="wordmage"><Link to="/portfolio/wordmage">wordmage.app</Link></div>
            <div className="portfolio-link" id="math-toys"><Link to="/portfolio/math-toys">math-toys.app</Link></div>
            <div className="portfolio-link" id="art"><Link to="/portfolio/art-games">art-game.vercel.app</Link></div>
        </div>
    </>
}

export default PortfolioMenu;