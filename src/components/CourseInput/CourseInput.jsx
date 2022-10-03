import React, { useState } from "react";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enterValue, setEnterValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setEnterValue(event.target.value);
    console.log(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Form Submit!");
    console.log(enterValue);
    props.onAddGoal(enterValue);
  };
  return (
    <form action="" onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" name="" onChange={goalInputChangeHandler} />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default CourseInput;
