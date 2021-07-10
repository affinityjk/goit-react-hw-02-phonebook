import PropTypes from "prop-types";
import { Contacts, Item, Button } from "./ContactsList.styled";

export const ContactsList = ({ contacts, onDeleteClick }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <Button type="button" onClick={() => onDeleteClick(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </Contacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
