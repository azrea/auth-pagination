import React from "react";
import ListItem from "./ListItem";
import { ListItemsContainer } from "./StyledShoppingList";

const ListItems = ({ list, onDelete, onEdit }) => {
  return (
    <ListItemsContainer>
      {list.map((item) => {
        const { id, title } = item;
        return (
          <ListItem onDelete={onDelete} onEdit={onEdit} id={id} item={title} />
        );
      })}
    </ListItemsContainer>
  );
};

export default ListItems;
