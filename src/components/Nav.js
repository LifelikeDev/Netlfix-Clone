import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

const Nav = ({ scrollHeight }) => {
  const [animateNav, setAnimateNav] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const history = useHistory();

  const toggleUserProfile = () => {
    setShowProfile((prevState) => !prevState);

    if (showProfile) {
      history.push("/profile");
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    // handle navbar animation
    const handleNavAnimation = () => {
      if (window.scrollY > scrollHeight) {
        setAnimateNav(true);
      } else {
        setAnimateNav(false);
      }
    };

    window.addEventListener("scroll", handleNavAnimation);

    return () => window.addEventListener("scroll", handleNavAnimation);
  }, [scrollHeight]);

  return (
    <nav className={`nav ${animateNav && "nav__black"}`}>
      <div className="home__nav-logo">
        <img
          src="images/netflix-logo.png"
          alt="netflix logo"
          onClick={() => history.push("/")}
        />
      </div>

      <div>
        <img
          src="/images/nav-avatar.png"
          alt="user avatar"
          className="home__nav-avatar"
          onClick={toggleUserProfile}
        />
      </div>
    </nav>
  );
};

export default Nav;
