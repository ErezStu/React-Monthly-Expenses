import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Nothing to show</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((item, id) => (
        <ExpenseItem
          key={id}
          name={item.name}
          cost={item.cost}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
