import { useEffect, useRef, useState } from 'react';
import "./assets/css/App.css";

const places = [
  {
    classSuffix: 'oceanario',
    location: 'Océanario Lisboa',
    city: 'Lisbon, Portugal'
  },
  {
    classSuffix: 'westminster',
    location: 'Westminster Abbey',
    city: 'London, England'
  },
  {
    classSuffix: 'beaufort-castle',
    location: 'Beaufort Castle',
    city: 'Beaufort, Luxembourg'
  },
  {
    classSuffix: 'alaska-cruise',
    location: 'Cruise Scenery',
    city: 'Alaska, USA'
  }
];

const Home = (props, state) => {
  const [ slide, setSlide ] = useState(0);

  const updateSlide = () => {
    console.log('slide', slide);

    if (slide < places.length - 1) {
      setSlide(slide + 1);
    } 
    else {
      setSlide(0);
    }
  };


  useEffect(() => {
    let t = setTimeout(updateSlide, 5000);
    return () => clearTimeout(t);
  }, [slide]);

  return (
    <div className="home-container">
      <div className="app-upper-background-container">
        <div className="app-upper-background-picture-container">
          <div className={`places-transition app-upper-background-picture app-upper-background-picture-${places[slide].classSuffix}`}></div>
        </div>
      </div>

      <div className="app-lower-background-container">
        <div className="app-lower-background-picture-container">
          <div className={`places-transition app-lower-background-picture app-lower-background-picture-${places[slide].classSuffix}`}></div>
        </div>

        <div className="app-picture-label-container">
          <div className="description">{places[slide].location}</div>
          <div className="location">{places[slide].city}</div>
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
