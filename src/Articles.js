import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { capitalize } from "./utils/utils";

import "./assets/css/App.css";

const mosaicColors = [
  "rgb(249, 143, 250)",
  "rgb(143, 250, 209)",
  "rgb(143, 198, 250)",
  "rgb(214, 250, 143)",
  "rgb(249, 177, 105)",
];

const Articles = (props, state) => {
  const mosaicRef = useRef();
  const params = useParams();
  const { category } = params;
  const content = props.content.filter((item) => item.category === category);

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
  console.log("====> Articles", content);
  return (
    <div className="app-container">
      <div className="inner-banner-container">
        <div className="header-container">
          <h1>{capitalize(category)}</h1>>
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

      {content.map((article) => {
        let articleContent;
        if (category !== "logophile") {
          articleContent = article.content.text;
        } else {
          articleContent = article.content.definition;
        }
        return (
          <article>
            <h2 className={`content-${category}`}>{article.title}</h2>

            <div>{articleContent}</div>
          </article>
        );
      })}
    </div>
  );
};

export default Articles;
