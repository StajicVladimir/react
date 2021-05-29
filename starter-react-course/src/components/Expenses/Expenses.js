import React, { useState } from "react";

import "./Expenses.css";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectYearHandler = (changedYear) => {
    setSelectedYear(changedYear);
  };

  const filteredExpenses = props.items.filter( (expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectYear={selectYearHandler}
        />
       <ExpensesList items={filteredExpenses}/>
      </Card>
      </li>
  );
}

export default Expenses;
