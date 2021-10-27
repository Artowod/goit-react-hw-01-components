import StatisticsElement from "./StatisticsElement";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  const statisticsElement = stats.map((item) => (
    <StatisticsElement key={item.id} label={item.label} percentage={item.percentage} />
  ));
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>{statisticsElement}</ul>
    </section>
  );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;
