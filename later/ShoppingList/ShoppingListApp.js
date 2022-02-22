import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import ListItems from "./ListItems";
import {
  InputBoxContainer,
  StyledClearButton,
  StyledInputBox,
  StyledMainContainer,
  StyledTitle,
  SubmitButton,
  ToDoListContainer,
} from "./StyledShoppingList";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const ShoppingListApp = () => {
  const [list, setList] = useState(getLocalStorage());
  const [value, setValue] = useState("");
  const [editID, setEditID] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, text: "", color: "" });

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
    return () => {
      clearTimeout(alertTimeout);
    };
  }, [alert]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      setAlert({ show: true, text: "Please add an Item.", color: "#e56399" });
    } else if (value && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: value };
          }
          return item;
        })
      );
      setIsEditing(false);
      setAlert({
        show: true,
        text: "Item changed successfully",
        color: "#fcd0a1",
      });
    } else {
      const newItem = { id: new Date().getTime().toString(), title: value };
      setAlert({
        show: true,
        text: "Item added successfully",
        color: "#7be0ad",
      });
      setList([...list, newItem]);
    }

    setValue("");
  };

  function deleteItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setAlert({
      show: true,
      text: "Item deleted Succesfully",
      color: "#e56399",
    });
    setList(newList);
  }

  function editItem(id) {
    const specificItem = list.find((item) => item.id === id);
    setEditID(specificItem.id);
    setIsEditing(true);
    setValue(specificItem.title);
  }

  const ClearAll = () => {
    setAlert({ show: true, text: "List Cleared", color: "#79BEEE" });
    setList([]);
  };

  return (
    <StyledMainContainer>
      <ToDoListContainer>
        {alert.show && <Alert {...alert} />}
        <StyledTitle>Grocery Items</StyledTitle>
        <InputBoxContainer>
          <StyledInputBox
            value={value}
            placeholder="e.g eggs"
            onChange={(e) => setValue(e.target.value)}
          />

          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </InputBoxContainer>

        {list.length <= 0 ? (
          <StyledTitle>House is fully stocked...</StyledTitle>
        ) : (
          <>
            <ListItems onEdit={editItem} onDelete={deleteItem} list={list} />
            <StyledClearButton onClick={ClearAll}>Clear all</StyledClearButton>
          </>
        )}
      </ToDoListContainer>
    </StyledMainContainer>
  );
};

export default ShoppingListApp;
