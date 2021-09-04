import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext); // destructure transactions (state) from the global context

  const amountList = transactions.map((transaction) => transaction.amount);
  const totalAmount = amountList
    .reduce((account, item) => (account += item), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{totalAmount} XAF</h1>
    </>
  );
}
