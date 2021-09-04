import React from "react";

export default function TransactionList() {
  return (
    <>
      <h3>Your Most Recent Transactions</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-500 XAF</span>
          <i class="fas fa-trash"></i>
        </li>
      </ul>
    </>
  );
}
