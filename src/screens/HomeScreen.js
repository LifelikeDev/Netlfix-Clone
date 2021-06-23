import Banner from "../components/Banner";
import Feed from "../components/Feed";
import Nav from "../components/Nav";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homeScreen_wrapper">
      <Nav scrollHeight={100} />

      <Banner />

      <Feed />
    </div>
  );
};

export default HomeScreen;
