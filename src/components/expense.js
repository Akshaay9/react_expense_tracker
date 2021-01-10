import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Doughnut } from 'react-chartjs-2';
function Expense() {
    const { transactions } = useSelector((state) => state.transactions);
    const incomeTransactions = transactions.filter((ele) => ele.type == "expense");

    const total =
        incomeTransactions &&
        incomeTransactions.reduce((acc, item) => (acc = acc + item.amount), 0);
        const chartData = {
            datasets: [{
                data: incomeTransactions.map((ele) => ele.amount),
                backgroundColor:"red"
            }],
            labels:incomeTransactions.map((ele) => ele.desc),
        }
  return (
    <div className="incomeChart red">
    <h1 className="expenseChartHEading">Expense</h1>
    <h2 className="incomeChartExpense">₹:{total}</h2>
        <Doughnut data={ chartData}/>
  </div>
  );
}

export default Expense;
