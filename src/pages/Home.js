import React, { useState } from "react";
import NavbarPersonalizada from "../components/Navbar";
import img from "../assets/img/home_cover.png";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import {
  Faculdade,
  Cursos,
  Eventos,
  Local,
  Temporada,
  Gerente,
  Hd,
} from "../Dados";
import SelectForm from "../components/imputs/select";
import InputData from "../components/imputs/data";
import EventTable from "../components/table";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Home(props) {
  const initialState = {
    Eventos: "",
    Cursos: "",
    Faculdade: "",
    Local: "",
    Temporadas: "",
    Gerente: "",
    Hd: "",
    Data: "",
  };
  const [agenda, setAgenda] = useState([]);
  const [form, setForm] = useState(initialState);

  function agendar() {
    setAgenda([...agenda, form]);
    setForm(initialState);
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  }
  const [value, onChange] = useState(new Date());

  return (
    <>
      <NavbarPersonalizada></NavbarPersonalizada>
      <Container className="d-flex flex-column">
        {props.children && (
          <h1 className={`fw-bolder ${props.className}`}>{props.children}</h1>
        )}
        <Row>
          <Col className="d-flex justify-content-between mb-5 mt-5">
          <Calendar onChange={onChange} value={value} />
            <img
              src={img}
              alt=""
              width={550}
              className=" d-flex justify-content-center align-itens-center align-self-center"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form className="mb-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row className="g-3 mb-3">
                  <Col md={3} sm={12}>
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
                  <Col md={3} sm={12}>
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

                  <Col md={3} sm={12}>
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
                  <Col md={3} sm={12}>
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

                  <Col md={3} sm={12}>
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
                  <Col md={3} sm={12}>
                    {" "}
                    <InputData
                      onChange={handleChange}
                      id={"Data"}
                      name={"Data"}
                      value={form.Data}
                    />
                  </Col>

                  <Col md={3} sm={12}>
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
                  <Col md={3} sm={12}>
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

                  <Col className="mt-5 d-flex justify-content-end" md={12}>
                    <Button variant="success" onClick={agendar}>
                      Success
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
          <Col md={12} >
            <EventTable dados={agenda} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
