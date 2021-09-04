import React from "react";

export default function IncomeExpenses() {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">9000</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">5000</p>
      </div>
    </div>
  );
}
