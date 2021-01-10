import React, { useState } from "react";
import TransactionHistory from "./transactionHistory";
import { addTransaction, removeTransaction } from "../action/transactions";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

function ExpenseTracker() {
  const dispatch = useDispatch();
  const initialState = {
    type: "",
    desc: "",
    amount: "",
    date: "",
  };
  const [form, setForm] = useState(initialState);
  const { type, desc, amount, date } = form;

  const submitFormHandler = () => {
    const newForm = {
      id: uuidv4(),
      type: type,
      desc: desc,
      amount: parseInt(amount),
      date: date,
    };
    dispatch(addTransaction(newForm));
  };
  return (
    <div className="expressTrackerContainer">
      <div className="heading">
        <h3>Expense Tracker</h3>
        <h5>Powered By Akshay</h5>
      </div>
      <div className="balanceHeader">
        <h3>Total Balance ₹0:0</h3>
      </div>
      <div className="formControl">
        <div className="topFormControl">
          <div className="firstItemFormControl">
            <label htmlFor="cars">
              {" "}
              <span>Type : </span>{" "}
            </label>
            <select
              name="cars"
              id="cars"
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="none">Select Expense Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="secondItemFormControl">
            <label htmlFor="amount">
              <span>Description : </span>
            </label>
            <input
              type="text"
              id="amount"
              placeholder="Description"
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
            />
          </div>
        </div>
        <div className="bottomFormControl">
          <div>
            <label htmlFor="desc">
              {" "}
              <span>Amount :</span>{" "}
            </label>
            <input
              type="text"
              id="desc"
              placeholder="Enter the amount"
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="birthday">
              {" "}
              <span>Select Date : </span>{" "}
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
        </div>
      </div>
      <button className="submitButton" onClick={() => submitFormHandler()}>
        Submit Transaction
      </button>

      <TransactionHistory />
    </div>
  );
}

export default ExpenseTracker;
