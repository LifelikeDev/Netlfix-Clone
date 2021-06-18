import "./SignInField.css";
import { IoCheckbox } from "react-icons/io5";

const SignInField = () => {
  return (
    <div className="signInField">
      <form className="signIn-form">
        <h2 className="signIn-header"> Sign In </h2>
        <input
          type="email"
          className="email-input"
          placeholder="Email or phone number"
        />
        <input
          type="password"
          className="password-input"
          placeholder="Password"
        />
        <button type="submit">Sign In</button>

        <div className="help-text">
          <p>
            <IoCheckbox className="check-box" /> Remember me
          </p>
          <p>Need help?</p>
        </div>

        <p className="signUp-text">
          New to Netflix? <span>Sign up now</span>
        </p>
      </form>
    </div>
  );
};

export default SignInField;
