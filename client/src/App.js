import React, { Component } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';


import './App.css';

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <Header/>
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    )
  }
}

export default App;

