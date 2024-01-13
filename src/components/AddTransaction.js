import React, {useContext, useState} from 'react';
import './addtransaction.css';
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction);
    }
  return (
    <>
      <h3>Add New Transactions</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text:'></input>
        </div>

        <div className='form-control'>
            <label htmlFor='amount'>Amount <br /> (negative-expense, psoitive-income)</label>
            <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder='Enter Amount:'></input>
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  )
}
