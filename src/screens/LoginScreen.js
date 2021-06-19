import { useState } from "react";
import SignInField from "../components/SignInField";
import SignUpField from "../components/SignUpField";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signedIn, setSignedIn] = useState(false);

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
          />
        </div>

        {!signedIn && (
          <button className="signIn-btn" onClick={() => setSignedIn(true)}>
            Sign In
          </button>
        )}

        <div
          className="gradient-layer"
          style={{ paddingBottom: `${signedIn ? "120px" : "60px"}` }}
        />
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
