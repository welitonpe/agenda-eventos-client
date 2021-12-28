import React from "react";
import "../../../style/components/style.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function InputData({ onChange, value, name }) {
  return (
    <>
      <Form.Control size="lg" type="date" name={name} onChange={onChange} value={value} />
    </>
  );
}
export default InputData;
