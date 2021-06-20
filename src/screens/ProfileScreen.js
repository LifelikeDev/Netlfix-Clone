import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <section className="profileScreen">
      <Nav />
      <div className="profileScreen-body">
        <h2>Edit Profile</h2>
        <div className="user-information">
          <img src="/images/nav-avatar.png" alt="user profile" />

          <div className="details">
            <h3 className="user-email">{user.email}</h3>

            <div className="plans">
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
