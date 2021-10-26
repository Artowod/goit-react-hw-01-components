import StatisticElement from "./StatisticElement/StatisticElement";

const Statistics = ({ title, stats }) => {
  console.log(title, stats);
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map((item) => (
          <StatisticElement key={item.id} label={item.label} percentage={item.percentage} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
