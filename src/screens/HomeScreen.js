import Banner from "../components/Banner";
import Feed from "../components/Feed";
import Navigation from "../components/Nav";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div>
      <Navigation />

      <Banner />

      <Feed />
    </div>
  );
};

export default HomeScreen;
