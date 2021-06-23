import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";
import IndividualPlan from "../components/IndividualPlan";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <section className="profileScreen">
      <Nav scrollHeight={50} />

      <div className="profileScreen-body">
        <h2>Edit Profile</h2>
        <div className="user-information">
          <img src="/images/nav-avatar.png" alt="user profile" />

          <div className="details">
            <h3 className="user-email">{user.email}</h3>

            <div className="plans">
              <h3 className="user-plan">Plans</h3>

              <p className="renewal-date">Renewal date: 23/06/22</p>

              <div className="individual-plans">
                <IndividualPlan name="Netflix Standard" quality="1080p" />
                <IndividualPlan name="Netflix Basic" quality="480p" />
                <IndividualPlan name="Netflix Premium" quality="4K + HDR" />
              </div>

              <button className="user-signOut" onClick={() => auth.signOut()}>
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
