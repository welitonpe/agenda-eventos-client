import React from "react";
import "../../../style/components/style.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SelectForm({ info, placeholder, id, name, onchange, value }) {
  const options = info.map((e) => {
    return (
      <option value={e} key={e}>
        {e}
      </option>
    );
  });

  return (
    <>
      <Form.Select
        aria-label="Exemplo"
        onChange={onchange}
        name={name}
        id={id}
        value={value}
      >
        <option value="">{placeholder}</option>
        {options}
      </Form.Select>
    </>
  );
}
export default SelectForm;
