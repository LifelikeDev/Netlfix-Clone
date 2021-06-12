import { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [animateNav, setAnimateNav] = useState(false);

  // handle navbar animation
  const handleNavAnimation = () => {
    if (window.scrollY > 100) {
      setAnimateNav(true);
    } else {
      setAnimateNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavAnimation);
    return () => window.addEventListener("scroll", handleNavAnimation);
  }, []);

  return (
    <nav className={`nav ${animateNav && "nav__black"}`}>
      <div className="nav-contents">
        <img
          src="images/netflix-logo.png"
          alt="netflix logo"
          className="nav-logo"
        />

        <img
          src="/images/nav-avatar.png"
          alt="user avatar"
          className="nav-avatar"
        />
      </div>
    </nav>
  );
};

export default Nav;
