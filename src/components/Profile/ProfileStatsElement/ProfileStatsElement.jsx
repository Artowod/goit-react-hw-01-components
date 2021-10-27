import styles from "./ProfileStatsElement.module.css";

const StatsElement = ({ label, quantity }) => {
  return (
    <li>
      <span className={styles.label}>{label}</span>
      <span className={styles.quantity}>{quantity}</span>
    </li>
  );
};
export default StatsElement;
