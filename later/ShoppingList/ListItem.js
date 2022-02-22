import React from "react";
import { ListItemContainer, StyledIconButton } from "./StyledShoppingList";

const ListItem = ({ id, item, onDelete, onEdit }) => {
  return (
    <ListItemContainer key={id}>
      {item}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "25%",
        }}
      >
        <StyledIconButton color="#FCD0A1" onClick={() => onEdit(id)}>
          Edit
        </StyledIconButton>
        <StyledIconButton color="#e56399" onClick={() => onDelete(id)}>
          Delete
        </StyledIconButton>
      </div>
    </ListItemContainer>
  );
};

export default ListItem;
