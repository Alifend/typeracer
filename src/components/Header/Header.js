import React, { useState } from "react";
import { Link } from "react-router-dom";
import { headerData } from "./headerData";
import { FaKeyboard } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header className="header">
      <div className="logo">
        <FaKeyboard className="logo-icon" />
        <Link className="logo-link" to={"/"}>
          typeracer
        </Link>
      </div>
      <div className="hamburguer" onClick={() => setShowSidebar(!showSidebar)}>
        <GiHamburgerMenu />
      </div>
      <div className={showSidebar ? "show routes " : " routes"}>
        {headerData.map((item, index) => {
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              className="item"
              key={index}
              to={item.path}
            >
              {item.icon}
              <span style={{ margin: "3px" }}>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
