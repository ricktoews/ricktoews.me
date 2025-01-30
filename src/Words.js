import { useEffect, useRef } from "react";
import "./assets/css/App.scss";

const mosaicColors = [
  "rgb(249, 143, 250)",
  "rgb(143, 250, 209)",
  "rgb(143, 198, 250)",
  "rgb(214, 250, 143)",
  "rgb(249, 177, 105)",
];

const Words = (props, state) => {
  const mosaicRef = useRef();

  useEffect(() => {
    if (mosaicRef) {
      let mosaicRefEl = mosaicRef.current;
      let mosaicTileEls = mosaicRefEl.querySelectorAll("div");
      let lastBg = -1;
      let bg = -1;
      mosaicTileEls.forEach((el) => {
        let safety = 10;
        while (safety > 0 && bg === lastBg) {
          bg = Math.floor(mosaicColors.length * Math.random());
          safety--;
        }
        el.style.backgroundColor = mosaicColors[bg];
        lastBg = bg;
      });
    }
  });

  useEffect(() => {
    //let timer = setInterval(changeMosaicTile, 1000);
  });

  const changeMosaicTile = () => {
    let mosaicRefEl = mosaicRef.current;
    let mosaicTileEls = mosaicRefEl.querySelectorAll("div");
    let tileNdx = Math.floor(Math.random() * mosaicTileEls.length);
    let bg = Math.floor(mosaicColors.length * Math.random());
    mosaicTileEls[tileNdx].style.backgroundColor = mosaicColors[bg];
  };

  return (
    <div className="app-container">
      <div className="inner-banner-container">
        <div className="header-container">
          <h1>Contents</h1>>
          <div ref={mosaicRef} className="mosaic-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="inner-banner-background"></div>
      </div>

      <h2 class="content-words">rhyparography</h2>

      <article>
        <div>
          <span class="entry">
            <b>rhyparography</b>. &nbsp;
          </span>
          <span class="definition">
            The painting of distasteful or sordid subjects. Also: writing about
            distasteful or sordid subjects.
          </span>
        </div>
        <div className="source">Extracted from online OED</div>
        <div className="etymology">
          <strong>Etymology: </strong> &lt; classical Latin{" "}
          <em>rhyparographos</em> painter of low or sordid subjects
        </div>
      </article>
    </div>
  );
};

export default Words;
