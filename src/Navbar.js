import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { capitalize } from "./utils/utils";

const Nav = (props) => {
  const { categories } = props;
  const navBtnRef = useRef();
  const navBarRef = useRef();
  const navItemsRef = useRef();
  const navigate = useNavigate();

  const [navBarState, setNavBarState] = useState(false);

  useEffect(() => {
    const navBtnEl = navBtnRef.current;
    const navBarEl = navBarRef.current;
    const navItemsEl = navItemsRef.current;

    navBtnEl.addEventListener("click", handleClick);
    navItemsEl.querySelectorAll("li").forEach((el) => {
      el.addEventListener("click", handleNav);
    });

    return () => {
      navBtnEl.removeEventListener("click", handleClick);
      navItemsEl.querySelectorAll("li").forEach((el) => {
        el.removeEventListener("click", handleNav);
      });
    };
  });

  const handleClick = (e) => {
    console.log("hamburger button clicked.", navBarState);
    setNavBarState(!navBarState);
  };

  const handleNav = (e) => {
    e.preventDefault();

    const el = e.currentTarget;
    const link = el.dataset.link;
    setNavBarState(false);
    navigate(link);
  };

  /*
  const capitalize = (str) => {
    let firstLetter = str.charAt(0).toUpperCase();
    str = firstLetter + str.slice(1);
    return str;
  };
  */

  return (
    <div className="nav-mechanism">
      <div ref={navBtnRef} className="nav-button">
        <div className="hamburger-container">
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
      </div>
      <div
        ref={navBarRef}
        className={"nav-element " + (navBarState ? "nav-show" : "nav-hide")}
      >
        <nav>
          <ul ref={navItemsRef}>
            <li data-link="/">
              <a href="/">Home</a>
            </li>
            {categories.map((category) => {
              return (
                <li data-link={`/category/${category}`}>
                  <a href="/words">{capitalize(category)}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
