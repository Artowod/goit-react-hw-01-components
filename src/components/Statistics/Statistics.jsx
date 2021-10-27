import StatisticElement from "./StatisticElement/StatisticElement";

const Statistics = ({ title, stats }) => {
  console.log(title, stats);
  const statisticElement = stats.map((item) => <StatisticElement key={item.id} label={item.label} percentage={item.percentage} />);
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{statisticElement}</ul>
    </section>
  );
};

export default Statistics;
