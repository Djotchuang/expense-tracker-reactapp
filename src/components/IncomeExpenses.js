import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext); // destructure transactions (state) from the global context

  const amountList = transactions.map((transaction) => transaction.amount);

  const income = amountList
    .filter((item) => item > 0)
    .reduce((account, item) => (account += item), 0)
    .toFixed(2);

  const expense =
    amountList
      .filter((item) => item < 0)
      .reduce((account, item) => (account += item), 0) * -(1).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}
