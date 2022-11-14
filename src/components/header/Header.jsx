import { useState } from "react";
import logo from "../../assets/cinema-logo.svg";
import "./Header.scss";

const HEADER_LIST = [
  {
    id: 1,
    iconClass: "fas fa-film",
    name: "Now Playing",
    type: "now-playing",
  },
  {
    id: 2,
    iconClass: "fas fa-fire",
    name: "Now Playing",
    type: "now-playing",
  },
  {
    id: 3,
    iconClass: "fas fa-star",
    name: "Now Playing",
    type: "now-playing",
  },
  {
    id: 4,
    iconClass: "fas fa-plus-square",
    name: "Now Playing",
    type: "now-playing",
  },
];

const Header = () => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    setNavClass(!navClass);
    setMenuClass(!menuClass);
    if (navClass) document.body.classList.add("header-nav-open");
    else document.body.classList.remove("header-nav-open");
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt="" />
            Cinema App
          </div>
          <div
            className={
              menuClass ? "header-menu-toggle isActive" : "header-menu-toggle"
            }
            id="header-mobile-menu"
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={navClass ? "header-nav header-mobile-nav" : "header-nav"}
          >
            {HEADER_LIST.map((data) => (
              <li key={data.id} className="header-nav-item">
                <span className="header-list-name">
                  <i className={data.iconClass}></i>
                </span>
                &nbsp;
                <span className="header-list-name">{data.name}</span>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="search-input"
            placeholder="Search for a movie"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
