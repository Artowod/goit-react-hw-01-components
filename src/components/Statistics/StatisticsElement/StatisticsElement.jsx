import PropTypes from "prop-types";

import styles from "./StatisticsElement.module.css";

const StatisticsElement = ({ id, label, percentage }) => {
  return (
    <li key={id} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsElement;
