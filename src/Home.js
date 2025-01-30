import Content from './components/Content';
import Intro from './components/Intro';
import CustomButton from './components/CustomButton';
import PortfolioMenu from './PortfolioMenu';
import WordMage from './portfolio/WordMage';
import MathToys from './portfolio/MathToys';
import MathToysAPI from './portfolio/MathToysAPI';
import ArtGames from './portfolio/ArtGames';
import AIGradingAssistant from './portfolio/AIGradingAssistant';
import "./assets/css/App.scss";
import Mosaic from './components/Mosaic';


const Home = (props, state) => {
  const portfolioItem = props['portfolio-item'];

  const PortfolioItems = {
    wordmage: { title: 'WordMage', content: <WordMage />, github: 'https://github.com/ricktoews/wordmage.app' },
    'math-toys-api': { title: 'Math Toys API', content: <MathToysAPI />, github: 'https://github.com/ricktoews/math-toys-aws' },
    'math-toys': { title: 'Math Toys', content: <MathToys />, github: 'https://github.com/ricktoews/math-toys-ui' },
    art: { title: 'Art Games', content: <ArtGames />, github: 'https://github.com/ricktoews/art-game' },
    'grading-assistant': { title: 'AI Grading Assistant', content: <AIGradingAssistant />, github: 'https://github.com/ricktoews/openai-grading-assistant' }
  }

  const IntroContent = { title: 'Intro', content: <Intro /> };

  const PortfolioItem = portfolioItem ? PortfolioItems[portfolioItem] : IntroContent;

  return (
    <div className="container">

      <header>
        {/* Left side of header */}
        <div> {/* header>div:first-child */}
          <CustomButton icon="home" href="/" />
          <h1>Rick Toews, Developer</h1>
        </div>

        {/* Right side of header */}
        <div> {/* header>div:last-child */}
          <div className="vertical-bar" />
          <div className="resume"><a href="/download/resume.pdf" target="_blank">Resume</a></div>
          <CustomButton icon="download" href="/download/resume.pdf" download="resume.pdf"></CustomButton>
        </div>
      </header>

      <div className="content">
        <div className="left-content">
          <PortfolioMenu />
        </div>

        <div className="right-content">
          <Content title={PortfolioItem.title} github={PortfolioItem.github}>{PortfolioItem.content}</Content>
        </div>
      </div>

    </div>

  );
};

export default Home;
