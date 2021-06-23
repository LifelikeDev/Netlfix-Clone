import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

const Nav = ({ scrollHeight }) => {
  const [animateNav, setAnimateNav] = useState(false);
  const history = useHistory();

  // handle navbar animation
  const handleNavAnimation = () => {
    if (window.scrollY > scrollHeight) {
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
      <div>
        <img
          src="images/netflix-logo.png"
          alt="netflix logo"
          className="nav-logo"
          onClick={() => history.push("/")}
        />
      </div>

      <div>
        <img
          src="/images/nav-avatar.png"
          alt="user avatar"
          className="nav-avatar"
          onClick={() => history.push("/profile")}
        />
      </div>
    </nav>
  );
};

export default Nav;
