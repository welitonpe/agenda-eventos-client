import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import {
  Faculdade,
  Cursos,
  Eventos,
  Local,
  Temporada,
  Gerente,
  Hd,
} from "./Dados";
import SelectForm from "./components/imputs/select";
import InputData from "./components/imputs/data";
import EventTable from "./components/table";

function App() {
  const [agenda, setAgenda] = useState([]);
  const [form, setForm] = useState({
    Eventos: "",
    Cursos: "",
    Faculdade: "",
    Local: "",
    Temporadas: "",
    Gerente: "",
    Hd: "",
    Data: "",
  });

  function agendar() {
    setAgenda([...agenda, form]);
  }


  function handleChange({ target }) {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  }

  return (
    <div className="App">

      <Home className="mb-3 mt-3">Eventos</Home>

      <Container>
        <div>
          <EventTable dados={agenda} />
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row className="g-3 mb-3">
              <Col md={6} sm={12}>
                {" "}
                <SelectForm
                  info={Eventos}
                  placeholder="Eventos"
                  id={"Eventos"}
                  name={"Eventos"}
                  value={form.Eventos}
                  onchange={handleChange}
                />
              </Col>
              <Col md={6} sm={12}>
                {" "}
                <SelectForm
                  info={Cursos}
                  placeholder="Cursos"
                  id={"Cursos"}
                  name={"Cursos"}
                  value={form.Cursos}
                  onchange={handleChange}
                />
              </Col>

              <Col md={6} sm={12}>
                {" "}
                <SelectForm
                  info={Faculdade}
                  placeholder="Faculdade"
                  id={"Faculdade"}
                  name={"Faculdade"}
                  value={form.Faculdade}
                  onchange={handleChange}
                />
              </Col>
              <Col md={6} sm={12}>
                {" "}
                <SelectForm
                  info={Local}
                  placeholder="Local"
                  id={"Local"}
                  name={"Local"}
                  value={form.Local}
                  onchange={handleChange}
                />
              </Col>

              <Col md={6} sm={12}>
                {" "}
                <SelectForm
                  info={Temporada}
                  placeholder="Temporadas"
                  id={"Temporadas"}
                  name={"Temporadas"}
                  value={form.Temporadas}
                  onchange={handleChange}
                />
              </Col>
              <Col md={6} sm={12}>
                {" "}
                <InputData
                  onChange={handleChange}
                  id={"Data"}
                  name={"Data"}
                  value={form.Data}
                />
              </Col>

              <Col md={6} sm={12}>
                {" "}
                <SelectForm
                  info={Gerente}
                  placeholder="Gerente"
                  id={"Gerente"}
                  name={"Gerente"}
                  value={form.Gerente}
                  onchange={handleChange}
                />
              </Col>
              <Col md={6} sm={12}>
                {" "}
                <SelectForm
                  info={Hd}
                  placeholder="Hd"
                  id={"Hd"}
                  name={"Hd"}
                  value={form.Hd}
                  onchange={handleChange}
                />
              </Col>

              <Col className="mt-3">
                <Button variant="success" onClick={agendar}>
                  Success
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default App;
