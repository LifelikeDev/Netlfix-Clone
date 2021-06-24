import "./SignInField.css";
import { IoCheckbox } from "react-icons/io5";
import { useState, useRef } from "react";
import { auth } from "../firebase";

const SignInField = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signUpMode, setSignUpMode] = useState(false);

  function signUp(e) {
    e.preventDefault();

    setSignUpMode(true);

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function signIn(e) {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="signInField">
      <form className="signIn-form">
        <h2 className="signIn-header">
          {" "}
          {signUpMode ? `Sign Up` : `Sign In`}{" "}
        </h2>

        <input
          type="email"
          className="regular-input"
          placeholder="Email "
          ref={emailRef}
        />
        <input
          type="password"
          className={`${signUpMode ? "regular-input" : "last-input"}`}
          placeholder="Password"
          ref={passwordRef}
        />

        {signUpMode ? (
          <button type="submit" onClick={signUp}>
            Sign Up
          </button>
        ) : (
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        )}

        <div className="help-text">
          <p>
            <IoCheckbox className="check-box" /> Remember me
          </p>
          <p>Need help?</p>
        </div>

        {signUpMode ? (
          <p className="signUser-text">
            Already a user?{" "}
            <span onClick={() => setSignUpMode(false)}>Sign in</span>
          </p>
        ) : (
          <p className="signUser-text">
            New to Netflix?{" "}
            <span onClick={() => setSignUpMode(true)}>Sign up now</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SignInField;
