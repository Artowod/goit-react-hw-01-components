const StatsElement = ({ label, quantity }) => {
  return (
    <li>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
};
export default StatsElement;
