import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from '../Helpers/Wrapper';

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const enteredUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const enteredUserAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserAge.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({title: "Invalid input", content: "Please enter valid name and age (non-empty)"})
      return;
    }

    if (+enteredUserAge < 1) {
      setError({title: "Invalid Age", content: "Please enter valid age (>0)"});
      return;
    }
    
    props.onAddUser(enteredUserName, enteredUserAge);
    // console.log(enteredUserName, enteredUserAge);
    clearUserNameAndAge();
  };

  const errorHandler = () => {
    setError(null);
    clearUserNameAndAge();
  };

  const clearUserNameAndAge = () => {
    setEnteredUserName("");
    setEnteredUserAge("");
  }
  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} content={error.content} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={enteredUserNameHandler}
            value={enteredUserName}
          ></input>
          <label htmlFor="age">Age (nanoseconds)</label>
          <input
            id="age"
            type="number"
            onChange={enteredUserAgeHandler}
            value={enteredUserAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
