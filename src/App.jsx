import { useState } from 'react';
import './App.css';
import Left from '../src/components/Left.jsx';

function App() {
  const [amount, setAmount] = useState(0);
  const [expenses, setExpenses] = useState([]); // Updated to hold expense objects
  const [salary, setSalary] = useState([]);
  return (
    <div className='pg'>
      <Left
        setAmount={setAmount}
        amount={amount}
        setExpenses={setExpenses}
        expenses={expenses}
        salary={salary}
        setSalary={setSalary}
      />
    </div>
  );
}

export default App;
