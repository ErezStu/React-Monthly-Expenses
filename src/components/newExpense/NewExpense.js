import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false);

  const addNewItemHandler = (newItem) => {
    const addedNewItem = { ...newItem, id: Math.random().toString() };

    props.onAddedItem(addedNewItem);
    setEditing(!editing);
  };

  const editShowHandler = () => {
    setEditing(!editing);
  };

  return (
    <div className="new-expense">
      {!editing && <button onClick={editShowHandler}>Add new expense</button>}
      {editing && (
        <ExpenseForm onNewItem={addNewItemHandler} onEdit={editShowHandler} />
      )}
    </div>
  );
};

export default NewExpense;
