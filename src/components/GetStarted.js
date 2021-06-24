import "./GetStarted.css";
import { AiOutlineRight } from "react-icons/ai";

const GetStarted = ({ handleSignIn }) => {
  return (
    <div>
      <h1 className="getStarted__main-text">
        Unlimited movies, TV shows, and more.
      </h1>
      <h2 className="getStarted__sub-text">Watch anywhere. Cancel anytime.</h2>
      <h3 className="getStarted__cta-text">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>

      <form className="getStarted__cta-form">
        <input
          type="text"
          className="getStarted__email"
          placeholder="Email address"
        />
        <button className="getStarted__cta-btn" onClick={handleSignIn}>
          Get Started <AiOutlineRight className="arrow-right" />
        </button>
      </form>
    </div>
  );
};

export default GetStarted;
