import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTransaction } from "../action/transactions";
function TransactionHistory() {
  const { transactions } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removeTransaction(id));
  };
  return (
    <div>
      {transactions.length > 0 && (
        <div>
          <div className="transactionHistory">
            <div className="transactionHistoryTitle">
              <h3>Transaction History :-</h3>
            </div>
            <div className="transactionList">
              {transactions.map((ele) => (
                <div
                  className={`transactionlist ${
                    ele.type == "income" ? "greenBackground" : "redBackground"
                  }`}
                  key={ele.id}
                >
                  <div className="transactionDetail">
                    <div className="transactionImg">
                      {ele.type == "income" ? (
                        <button className="incomeBtn">I</button>
                      ) : (
                        <button className="expensseBtn">E</button>
                      )}
                    </div>
                    <div className="transactiondetail">
                      <p className="desc">{ele.desc}</p>
                      <div className="transactionAmountDate">
                        <p className="amt">₹:{ele.amount}</p>
                        <p className="date">{ele.date}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="deleteButton"
                    onClick={() => deleteHandler(ele.id)}
                  >
                    <i className="fas fa-trash-restore"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransactionHistory;
