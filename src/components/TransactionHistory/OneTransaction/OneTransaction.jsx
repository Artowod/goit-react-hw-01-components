import PropTypes from "prop-types";

import styles from "./OneTransaction.module.css";

const OneTransaction = ({ type, amount, currency }) => {
  return (
    <tr className={styles.transactionRow}>
      <td className={styles.transactionType}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

OneTransaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default OneTransaction;
