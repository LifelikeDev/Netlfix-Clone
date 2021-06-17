import "./LoginScreen.css";

const LoginScreen = () => {
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

        <button className="signIn-btn">Sign In</button>

        <div className="gradient-layer" />
      </div>
    </header>
  );
};

export default LoginScreen;
