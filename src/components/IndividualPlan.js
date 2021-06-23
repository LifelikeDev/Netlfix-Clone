import "./IndividualPlan.css";

const IndividualPlan = ({ name, quality }) => {
  return (
    <article className="single-plan">
      <div className="plan-name">
        <h3>{name}</h3>
        <p>{quality}</p>
      </div>

      <button className="subscribe-button">Subscribe</button>
    </article>
  );
};

export default IndividualPlan;
