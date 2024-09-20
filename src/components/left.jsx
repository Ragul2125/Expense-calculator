import React from "react";
import Right from "../components/Right.jsx";

const Left = ({ setAmount, amount, setExpenses, expenses, salary, setSalary }) => {
  return (
    <div className="container">
      <div className="div">
        <div className="left">
          <div className="header">
            <h1>Hello, Ragul</h1>
          </div>
          <div className="input-box">
            <h4>Total:</h4>
            <div className="amount">
              <h1>&#8377;</h1>
              <h1>{salary}</h1>
            </div>
          </div>
          <div className="break">
            <h3>Breakdown</h3>
          </div>
          <div className="output-div">
            {expenses.map((expense, index) => (
              <div className="op-div" key={index}>
                <div className="content">
                  <h1>{expense.place}</h1>
                </div>
                <div className="am">
                  <h1>&#8377;</h1>
                  <h1>{expense.amount}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <Right
            setAmount={setAmount}
            amount={amount}
            setExpenses={setExpenses}
            expenses={expenses}
            salary={salary}
            setSalary={setSalary}
          />
        </div>
      </div>
    </div>
  );
};

export default Left;
