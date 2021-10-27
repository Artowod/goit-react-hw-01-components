import PropTypes from "prop-types";

import styles from "./ProfileStatsElement.module.css";

const StatsElement = ({ label, quantity }) => {
  return (
    <li>
      <span className={styles.label}>{label}</span>
      <span className={styles.quantity}>{quantity}</span>
    </li>
  );
};

StatsElement.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default StatsElement;
