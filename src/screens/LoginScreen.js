import { useState } from "react";
import { useHistory } from "react-router";
import SignInField from "../components/SignInField";
import SignUpField from "../components/SignUpField";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signedIn, setSignedIn] = useState(false);
  const history = useHistory();

  function handleSignIn(e) {
    e.preventDefault();

    setSignedIn(true);
  }

  return (
    <header className="loginScreen">
      <div className="loginScreen-nav">
        <div>
          <img
            className="nav-logo"
            src="/images/netflix-logo-2.png"
            alt="netflix"
            onClick={() => history.push("/")}
          />
        </div>

        {!signedIn && (
          <button className="signIn-btn" onClick={() => setSignedIn(true)}>
            Sign In
          </button>
        )}
      </div>

      {signedIn ? (
        <section className="loginScreen-body signIn">
          <SignInField />
        </section>
      ) : (
        <section className="loginScreen-body">
          <SignUpField handleSignIn={handleSignIn} />
        </section>
      )}
    </header>
  );
};

export default LoginScreen;
