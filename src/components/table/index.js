import { Table } from "react-bootstrap";

const EventTable = ({ dados }) => {
  console.log(dados.Cursos);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Eventos</th>
          <th>Curso</th>
          <th>Faculdade</th>
          <th>Local</th>
          <th>Temporada</th>
          <th>Data</th>
          <th>Gerente</th>
          <th>Hd</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{dados.Eventos}</td>
          <td>{dados.Cursos}</td>
          <td>{dados.Faculdade}</td>
          <td>{dados.Local}</td>
          <td>{dados.Temporadas}</td>
          <td>{dados.Data}</td>
          <td>{dados.Gerente}</td>
          <td>{dados.Hd}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default EventTable;
