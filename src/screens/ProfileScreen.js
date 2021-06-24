import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";
import IndividualPlan from "../components/IndividualPlan";
// import { useHistory } from "react-router";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  // const history = useHistory();

  const signUserOut = () => {
    auth.signOut();

    // history.push("/");
  };

  return (
    <section className="profileScreen">
      <Nav scrollHeight={50} />

      <div className="profileScreen__body">
        <h2>Edit Profile</h2>
        <div className="profileScreen__user-information">
          <img src="/images/nav-avatar.png" alt="user profile" />

          <div className="profileScreen__details">
            <h3 className="profileScreen__user-email">{user.email}</h3>

            <div className="profileScreen__plans">
              <h3 className="profileScreen__user-plan">Plans</h3>

              <p className="profileScreen__renewal-date">
                Renewal date: 23/06/22
              </p>

              <div className="profileScreen__individual-plans">
                <IndividualPlan name="Netflix Standard" quality="1080p" />
                <IndividualPlan name="Netflix Basic" quality="480p" />
                <IndividualPlan name="Netflix Premium" quality="4K + HDR" />
              </div>

              <button className="user-signOut" onClick={signUserOut}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileScreen;
