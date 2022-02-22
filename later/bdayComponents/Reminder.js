import { useState } from "react";
import Button from "./Button";
import List from "./List";
import data from "./data";

const Reminder = () => {
  const [people, setPeople] = useState(data);

  return (
    <div className="reminderContainer">
      <h2> {people.length} Birthdays Today</h2>
      <List people={people} />
      <Button text={"Clear all"} onClick={() => setPeople([])} />
    </div>
  );
};

export default Reminder;
