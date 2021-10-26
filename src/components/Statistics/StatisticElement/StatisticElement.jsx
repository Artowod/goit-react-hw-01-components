const StatisticElement = ({ id, label, percentage }) => {
  return (
    <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

export default StatisticElement;
