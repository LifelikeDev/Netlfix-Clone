import "./Footer.css";

const Footer = () => {
  const links = [
    ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
    ["Account", "Ways to Watch", "Corporate Information", "Netflix Originals"],
    ["Media Center", "Terms of Use", "Contact Us"],
  ];

  return (
    <footer className="footer-main">
      <div className="footer">
        <p className="lead-text">Questions? Contact us.</p>
        <nav className="footer-grid">
          <ul>
            {links[0].map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
          <ul>
            {links[1].map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
          <ul>
            {links[2].map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
          <ul>
            {links[3].map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
        </nav>
        <p className="company-name">Netflix</p>
      </div>
    </footer>
  );
};

export default Footer;
