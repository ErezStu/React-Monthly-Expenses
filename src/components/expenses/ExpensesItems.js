import React, { useState } from "react";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./ExpensesItems.css";
import ExpensesChart from "./ExpensesChart";

const ExpensesItems = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expense-items">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default ExpensesItems;
