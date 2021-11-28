import React, { useState } from "react";

import NewExpense from "./components/newExpense/NewExpense";
import ExpensesItems from "./components/expenses/ExpensesItems";

const items = [
  {
    id: "e1",
    name: "A new door",
    cost: 777,
    date: new Date(2020, 5, 18),
  },
  { id: "e2", name: "TV", cost: 499.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    name: "Iphone",
    cost: 699,
    date: new Date(2021, 2, 1),
  },
  {
    id: "e4",
    name: "PC",
    cost: 999,
    date: new Date(2019, 9, 22),
  },
];

function App() {
  const [updatedItems, setUpdatedItems] = useState(items);

  const addedItemHandler = (newItem) => {
    setUpdatedItems((updatedItems) => {
      return [newItem, ...updatedItems];
    });
  };

  return (
    <div>
      <NewExpense onAddedItem={addedItemHandler} />
      <ExpensesItems items={updatedItems} />
    </div>
  );
}

export default App;
