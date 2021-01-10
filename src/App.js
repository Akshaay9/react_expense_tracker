import React from "react";
import Income from "./components/income";
import ExpenseTracker from "./components/expenseTracker";
import Expense from "./components/expense";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="incomeContainer">
        <Income />
        <ExpenseTracker />
        <Expense />
      </div>
    </div>
  );
}

export default App;
