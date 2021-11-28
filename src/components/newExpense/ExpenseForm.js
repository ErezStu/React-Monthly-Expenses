import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [newName, setNewName] = useState("");
  // const [newCost, setNewCost] = useState("");
  // const [newDate, setNewDate] = useState("");

  const [formInput, setFormInput] = useState({
    newName: "",
    newCost: "",
    newDate: "",
  });

  const newNameHandler = (e) => {
    setFormInput((preState) => {
      return { ...preState, newName: e.target.value };
    });
  };

  const newCostHandler = (e) => {
    setFormInput((preState) => {
      return { ...preState, newCost: e.target.value };
    });
  };

  const newDateHandler = (e) => {
    setFormInput((preState) => {
      return { ...preState, newDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const addedNewItem = {
      name: formInput.newName,
      cost: +formInput.newCost,
      date: new Date(formInput.newDate),
    };

    props.onNewItem(addedNewItem);
    setFormInput({ newName: "", newCost: "", newDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input
            type="text"
            value={formInput.newName}
            onChange={newNameHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Cost</label>
          <input
            value={formInput.newCost}
            type="number"
            min="0.1"
            step="0.1"
            onChange={newCostHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={formInput.newDate}
            type="date"
            min={new Date()}
            max="2022-12-31"
            onChange={newDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onEdit}>
          Cancel
        </button>
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
