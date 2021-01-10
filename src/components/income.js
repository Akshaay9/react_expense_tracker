import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
function Income() {
  const { transactions } = useSelector((state) => state.transactions);
  const incomeTransactions = transactions.filter((ele) => ele.type == "income");

  const total =
    incomeTransactions &&
        incomeTransactions.reduce((acc, item) => (acc = acc + item.amount), 0);
    const chartData = {
        datasets: [{
            data: incomeTransactions.map((ele) => ele.amount),
            backgroundColor:"green"
        }],
        labels:incomeTransactions.map((ele) => ele.desc),
    }

  return (
    <div className="incomeChart green">
      <h1 className="incomeChartHEading ">Income</h1>
      <h2 className="incomeChartIncome">₹:{total}</h2>
          <Doughnut data={ chartData}/>
    </div>
  );
}
export default Income;
