import "./SignInField.css";

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
      </form>
    </div>
  );
};

export default SignInField;
