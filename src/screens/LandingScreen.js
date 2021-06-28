import { useState } from "react";
import { useHistory } from "react-router";
import SignInField from "../components/SignInField";
import GetStarted from "../components/GetStarted";
import "./LandingScreen.css";

const LandingScreen = () => {
  const [signedIn, setSignedIn] = useState(false);
  const history = useHistory();

  function handleSignIn(e) {
    e.preventDefault();

    setSignedIn(true);
  }

  return (
    <header className="landingScreen">
      <div className="landingScreen__nav">
        <div className="nav-logo">
          <img
            src="/images/netflix-logo-2.png"
            alt="netflix"
            onClick={() => history.push("/")}
          />
        </div>

        {!signedIn && (
          <button
            className="landingScreen__signIn-btn"
            onClick={() => setSignedIn(true)}
          >
            Sign In
          </button>
        )}
      </div>

      {signedIn ? (
        <section className="landingScreen__body signIn">
          <SignInField />
        </section>
      ) : (
        <section className="landingScreen__body">
          <GetStarted handleSignIn={handleSignIn} />
        </section>
      )}
    </header>
  );
};

export default LandingScreen;
