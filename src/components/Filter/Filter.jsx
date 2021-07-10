import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { DebounceInput } from "react-debounce-input";

export const Filter = ({ filter, onChange }) => {
  return (
    <DebounceInput
      id={`id-${nanoid(3)}`}
      type="text"
      name="name"
      value={filter}
      debounceTimeout={500}
      onChange={onChange}
      placeholder="Search"
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
