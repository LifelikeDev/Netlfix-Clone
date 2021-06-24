import "./GetStarted.css";
import { AiOutlineRight } from "react-icons/ai";

const GetStarted = ({ handleSignIn }) => {
  return (
    <div>
      <h1 className="main-text">Unlimited movies, TV shows, and more.</h1>
      <h2 className="sub-text">Watch anywhere. Cancel anytime.</h2>
      <h3 className="cta__sub-text">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>

      <form className="cta-form">
        <input type="text" className="email" placeholder="Email address" />
        <button className="cta-started" onClick={handleSignIn}>
          Get Started <AiOutlineRight className="arrow-right" />
        </button>
      </form>
    </div>
  );
};

export default GetStarted;
