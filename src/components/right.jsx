import React, { useEffect, useState } from "react";

const Right = ({ setAmount, amount, setExpenses, expenses, salary, setSalary }) => {
  const [localSalary, setLocalSalary] = useState("");
  const [localAmount, setLocalAmount] = useState("");
  const [localPlace, setLocalPlace] = useState("");
  const [categories, setCategories] = useState({
    food: false,
    travel: false,
    shopping: false,
  });
  const [isSalaryAdded, setIsSalaryAdded] = useState(false); // Flag to check if salary is added

  useEffect(() => {
    if (isSalaryAdded) {
      alert("Your salary has been added , you can't change.");
    }
  }, [isSalaryAdded]);

  const handleAddSalary = () => {
    const parsedSalary = parseInt(localSalary, 10);
    if (!isNaN(parsedSalary) && parsedSalary >= 0) {
      if (!isSalaryAdded) {
        setSalary(parsedSalary);
        setLocalSalary("");
        setIsSalaryAdded(true); // Set flag to true after adding salary
      } else {
        alert("Salary is already added.");
      }
    } else {
      alert("Please enter a valid number for salary.");
    }
  };

  const handleAddExpense = () => {
    const parsedAmount = parseInt(localAmount, 10);
    if (!isNaN(parsedAmount) && localPlace.trim() && parsedAmount >= 0) {
      setAmount(parsedAmount);
      setExpenses([
        ...expenses,
        {
          amount: parsedAmount,
          place: localPlace,
          categories: Object.keys(categories).filter((cat) => categories[cat]),
        },
      ]);
      setSalary(salary - parsedAmount);
      setLocalAmount("");
      setLocalPlace("");
      setCategories({
        food: false,
        travel: false,
        shopping: false,
      });
    } else {
      alert("Please enter valid inputs for amount and place.");
    }
  };

  const toggleCategory = (category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  return (
    <div className="container1">
      <div className="profile">
        <div className="input-salary">
          <input
            type="text"
            placeholder="Enter your Salary.."
            value={localSalary}
            onChange={(e) => setLocalSalary(e.target.value)}
            disabled={isSalaryAdded} // Disable input if salary is already added
          />
        </div>
        <div className="add-button">
          <button type="button" onClick={handleAddSalary} disabled={isSalaryAdded}>
            Add
          </button>
        </div>
      </div>
      <div className="content">
        <div className="input">
          <input
            type="text"
            placeholder="Amount"
            value={localAmount}
            onChange={(e) => setLocalAmount(e.target.value)}
          />
          <hr />
          <input
            type="text"
            placeholder="Place of Spend"
            value={localPlace}
            onChange={(e) => setLocalPlace(e.target.value)}
          />
          <hr />
        </div>
        <div className="list">
          <div className="items">
            <input
              type="checkbox"
              id="food"
              checked={categories.food}
              onChange={() => toggleCategory("food")}
            />
            <label htmlFor="food">Food/Beverage</label>
          </div>
          <div className="items">
            <input
              type="checkbox"
              id="travel"
              checked={categories.travel}
              onChange={() => toggleCategory("travel")}
            />
            <label htmlFor="travel">Travel/Commute</label>
          </div>
          <div className="items">
            <input
              type="checkbox"
              id="shopping"
              checked={categories.shopping}
              onChange={() => toggleCategory("shopping")}
            />
            <label htmlFor="shopping">Shopping</label>
          </div>
        </div>
        <div className="button">
          <button type="button" onClick={handleAddExpense}>
            Add to Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default Right;
