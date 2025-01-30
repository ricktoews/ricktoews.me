import { useEffect, useRef } from "react";
import "./assets/css/App.scss";

const mosaicColors = [
  "rgb(249, 143, 250)",
  "rgb(143, 250, 209)",
  "rgb(143, 198, 250)",
  "rgb(214, 250, 143)",
  "rgb(249, 177, 105)",
];

const About = (props, state) => {
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

      <h2 class="content-professional">JavaScript Array.reduce</h2>
      <article>
        <p>To get the sum of the numbers in an array in one fell swoop:</p>
        <p>
          var numbers = [1, 2, 3];
          <br />
          var sum = numbers.reduce((a, cv) =&gt; a + cv, 0); // sum = 6
        </p>
        <p>
          The reduce function takes a callback and an initial value.
          <br />
          a: accumulator
          <br />
          cv: current value
        </p>
      </article>

      <h2 class="content-math">Pythagorean Triples - Values for a, b, and c</h2>
      <article>
        <p>
          For a^2 and b^2, any square &gt;= 9 will work. This is because, for
          any such square, there exists a square whose top and side it can be
          wrapped around. For example 9 wraps around 16. Every odd square a^2
          will wrap around the even square computed as the square of (a^2 - 1) /
          2. Likewise, every even square will wrap around a square computed as
          the square of (a^2 - 4) / 2. In this case, there is a triple with c -
          b = 2, for which a^2 is the sum of 2b+1 (inner layer) and 2b+3) outer
          layer, or 4b + 4.
        </p>
        <p>
          So given an odd square as a^2, subtract 1 and divide by 2 to find a
          value for b. Given an even square as a^2, subtract 4 and divide by 4
          to get a value for b. We've looked at 9; let's consider 25, for a = 5.
          Calculating (25 - 1) / 2 yields 12 for the value of b, whose square is
          144. Therefore c^2 = 25 + 144 = 169, yielding 13 as the value of c.
          The resulting triple is (5, 12, 13).
        </p>
        <p>
          An example with an even square is a = 8, a^2 = 64. Take (64 - 4) / 4,
          which is 15. The square of 15 is 225. So a^2 + b^2 = 64 + 225, which
          yields 289 as the value of c^2, so c = 17. The triple is (8, 15, 17).
        </p>
        <p>So for a and b, any square &gt;= 9 will work. What about for c? </p>
        <p>
          The first value of c for which c^2 can be expressed as the sum of two
          other squares is 5, for the familiar (3, 4, 5) triple. The next value
          of c that works is 10 (6, 8, 10), followed by 13 (5, 12, 13). The
          squares 36, 49, 64, and 81 cannot be expressed as the sum of two
          squares. This is true of more than half of the possible values of c
          from 5 - 100.
        </p>
        <p>
          It's not apparent that there's any way to determine whether a given
          square will work as c^2, other than by testing it to see if it can be
          expressed as the sum of two squares. The approach I use is to compute
          the sum of its layers until I either find a square or run out of
          layers. The outermost layer is 2c - 1. The next is 2c - 3, then 2c -
          5, &amp;c.
        </p>
      </article>

      <h2 class="content-words">rhyparography</h2>

      <article>
        <div>
          <span class="entry">
            <b>rhyparography</b>
          </span>
          .
          <span class="definition">
            The painting of distasteful or sordid subjects. Also: writing about
            distasteful or sordid subjects.
          </span>
        </div>
        <div className="source">Extracted from online OED</div>
        <div className="etymology">
          <strong>Etymology: </strong> &lt; classical Latin{" "}
          <em>rhyparographos</em> painter of low or sordid subjects (see{" "}
          <span class="oed-a-tag">
            <span class="xref">
              <span class="smallCaps">rhyparograph</span>{" "}
              <span class="ps">n.</span>
            </span>
          </span>
          ) +{" "}
          <span class="oed-a-tag">
            <span class="xref">
              <span class="smallCaps">-y</span>{" "}
              <span class="ps">
                suffix<sup>3</sup>
              </span>
            </span>
          </span>
          ; compare{" "}
          <span class="oed-a-tag">
            <span class="xref">
              <span class="smallCaps">-graphy</span>{" "}
              <span class="ps">comb. form</span>
            </span>
          </span>
          . Compare later{" "}
          <span class="oed-a-tag">
            <span class="xref">
              <span class="smallCaps">rhypography</span>{" "}
              <span class="ps">n.</span>
            </span>
          </span>
        </div>
        <div className="citations">
          <ul>
            <li>
              <span class="noIndent" id="eid25243285">
                <span>1678 </span> <span class="smallCaps">E. Phillips</span>{" "}
                <em>
                  <a
                    class="sourcePopup"
                    onClick="viewSourcePopup(this);"
                    role="button"
                    tabindex="0"
                    onkeydown="viewSourcePopupFromKeyDown(event, this);"
                    rel="0903148"
                  >
                    New World of Words
                  </a>
                </em>{" "}
                (new ed.) List Barbarous Words
              </span>{" "}
              <span class="quotationKeyword">Ryparography</span>.
            </li>
            <li>
              <span class="noIndent" id="eid325702233">
                <span>1842 </span> <span class="smallCaps">W. Smith</span>{" "}
                <em>
                  <a
                    class="sourcePopup"
                    onClick="viewSourcePopup(this);"
                    role="button"
                    tabindex="0"
                    onkeydown="viewSourcePopupFromKeyDown(event, this);"
                    rel="0010114"
                  >
                    Dict. Greek &amp; Rom. Antiq.
                  </a>
                </em>{" "}
                694/1
              </span>{" "}
              <span class="quotationKeyword">Rhyparography</span>, pornography,
              and all the lower classes of art.
            </li>
            <li>
              <span class="noIndent" id="eid313562716">
                <span>1850 </span> <span class="smallCaps">J. Leitch</span> tr.
                K. O. Müller{" "}
                <em>
                  <a
                    class="sourcePopup"
                    onClick="viewSourcePopup(this);"
                    role="button"
                    tabindex="0"
                    onkeydown="viewSourcePopupFromKeyDown(event, this);"
                    rel="0000982"
                  >
                    Ancient Art
                  </a>
                </em>{" "}
                (new ed.) §163
              </span>{" "}
              At this time also{" "}
              <span class="quotationKeyword">rhyparography</span> (so-called
              still life) probably made its appearance.
            </li>
            <li>
              <span class="noIndent" id="eid25243311">
                <span>1896 </span> <span class="smallCaps">G. Saintsbury</span>{" "}
                <em>
                  <a
                    class="sourcePopup"
                    onClick="viewSourcePopup(this);"
                    role="button"
                    tabindex="0"
                    onkeydown="viewSourcePopupFromKeyDown(event, this);"
                    rel="0344712"
                  >
                    Hist. 19th Cent. Lit.
                  </a>
                </em>{" "}
                i. 22
              </span>{" "}
              The Lousiad (a perfect triumph of cleverness expended on what the
              Greeks called <span class="quotationKeyword">rhyparography</span>
              ).
            </li>
            <li>
              <span class="noIndent" id="eid25243319">
                <span>1927 </span>{" "}
                <em>
                  <a
                    class="sourcePopup"
                    onClick="viewSourcePopup(this);"
                    role="button"
                    tabindex="0"
                    onkeydown="viewSourcePopupFromKeyDown(event, this);"
                    rel="0163023"
                  >
                    Amer. Mercury
                  </a>
                </em>{" "}
                May p. xlviii
              </span>{" "}
              Mr. Craven cannot quite distinguish between painting and art,{" "}
              <span class="quotationKeyword">rhyparography</span> and art,
              realism and art.
            </li>
            <li>
              <span class="noIndent" id="eid151740458">
                <span>1951 </span> <span class="smallCaps">M. L. Wolf</span>{" "}
                <em>
                  <a
                    class="sourcePopup"
                    onClick="viewSourcePopup(this);"
                    role="button"
                    tabindex="0"
                    onkeydown="viewSourcePopupFromKeyDown(event, this);"
                    rel="1015596"
                  >
                    Dict. Arts
                  </a>
                </em>{" "}
                586
              </span>{" "}
              <em>
                <span class="quotationKeyword">Rhyparography</span>
              </em>
              , (1) In literature, esp. Renaissance, the presentation of sordid
              or low individuals or subjects. (2) In art generally, esp.
              painting, the depiction of foul or revolting objects or scenes;
              also, the painting of genre or still life pictures.
            </li>
            <li>
              <span class="noIndent" id="eid153610243">
                <span>2007 </span> <span class="smallCaps">R. Dowling</span>{" "}
                <em>
                  <a
                    class="sourcePopup"
                    onClick="viewSourcePopup(this);"
                    role="button"
                    tabindex="0"
                    onkeydown="viewSourcePopupFromKeyDown(event, this);"
                    rel="1363702"
                  >
                    Slumming in New York
                  </a>
                </em>{" "}
                (2009) 68
              </span>{" "}
              Peck accuses Crane of{" "}
              <span class="quotationKeyword">rhyparography</span>—creating
              distasteful imagery for its own sake.
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default About;
