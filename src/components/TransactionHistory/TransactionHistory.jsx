import OneTransaction from "./OneTransaction";
import PropTypes from "prop-types";

import styles from "./TransactionHistory.module.css";

/* 
id — уникальный идентификатор транзакции
type — тип транзакции
amount - сумма транзакции
currency - тип валюты 
*/

const TransactionHistory = ({ items }) => {
  /*  --- 1st variant how to transfer props---
    const oneTransaction = items.map(({ id, type, amount, currency }) => (
    <OneTransaction key={id} type={type} amount={amount} currency={currency} />
  ));
 */

  /*  --- 2st variant how to transfer props--- */
  const oneTransaction = items.map(({ id, ...props }) => <OneTransaction key={id} {...props} />);

  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.transactionHistory__header}>
        <tr>
          <th className={styles.oneTransactionColumn}>Type</th>
          <th className={styles.oneTransactionColumn}>Amount</th>
          <th className={styles.oneTransactionColumn}>Currency</th>
        </tr>
      </thead>

      <tbody>{oneTransaction}</tbody>
    </table>
  );
};

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default TransactionHistory;
