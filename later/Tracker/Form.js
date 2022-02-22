import React, { useState } from "react";

const Form = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remind, setRemind] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, remind });

    setText("");
    setDay("");
    setRemind("");
  };

  return (
    <div>
      <form className="form" action="">
        <div>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            value={text}
            placeholder="Add new Task"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="text"
            value={day}
            placeholder="Enter the day of the task"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="Reminder">Reminder</label>
          <input
            type="checkbox"
            value={remind}
            checked={remind}
            onChange={(e) => setRemind(e.target.checked)}
          />
        </div>

        <div>
          <input
            className="submitBtn"
            type="submit"
            value="Submit"
            onClick={onSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
