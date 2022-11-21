import "./assets/css/App.css";

const Home = (props, state) => {
  return (
    <div className="home-container">
      <div className="app-upper-background-container">
        <div className="app-upper-background-picture-container">
          <div className="app-upper-background-picture"></div>
        </div>
      </div>

      <div className="app-lower-background-container">
        <div className="app-lower-background-picture-container">
          <div className="app-lower-background-picture"></div>
        </div>

        <div className="app-picture-label-container">
          <div className="description">Oceanário de Lisboa</div>
          <div className="location">Lisbon, Portugal</div>
        </div>
      </div>

      <div className="home-content">
        <div className="title">ricktoews.me</div>
        <div className="tag-line">
          🇵🇹🇭🇷🇳🇱🇧🇪🇱🇺🇨🇿🇦🇹🇩🇰🇫🇷🇮🇸🇬🇧
          <br />
          Recreational Traveler
          <br />
          Software Developer
          <br />
          T: @retorick
        </div>
      </div>
    </div>
  );
};

export default Home;
