import { useState } from "react";
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

        <button className="signIn-btn" onClick={() => setSignedIn(true)}>
          Sign In
        </button>

        <div className="gradient-layer" />
      </div>

      <section className="loginScreen-body">
        <div>
          <h1 className="main-text">Unlimited movies, TV shows, and more.</h1>
          <h2 className="sub-text">Watch anywhere. Cancel anytime.</h2>
          <h3 className="cta__sub-text">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <form className="cta-form">
            <input type="text" className="email" placeholder="Email address" />
            <button className="cta-started" onClick={handleSignIn}>
              Get Started &rarr;
            </button>
          </form>
        </div>
      </section>
    </header>
  );
};

export default LoginScreen;
