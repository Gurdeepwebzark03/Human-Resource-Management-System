import "./Card.css";

const Card = ({ title, value, color }) => {
  return (
    <div className={`dashboard-card ${color}`}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default Card;