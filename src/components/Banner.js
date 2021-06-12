import "./Banner.css";

const Banner = () => {
  function truncText(str, n) {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: "url(./images/home-bg.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: "rgba(34, 34, 34, 0.85)",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">Movie Name</h1>
        <div className="banner-buttons">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <h2 className="banner-description">
          {truncText(`Some banner description here...`, 100)}
        </h2>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
