import { Table } from "react-bootstrap";

const EventTable = ({ dados }) => {
  console.log(dados);

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
        {dados.map((elemento, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{elemento?.Eventos}</td>
            <td>{elemento?.Cursos}</td>
            <td>{elemento?.Faculdade}</td>
            <td>{elemento?.Local}</td>
            <td>{elemento?.Temporadas}</td>
            <td>{elemento?.Data}</td>
            <td>{elemento?.Gerente}</td>
            <td>{elemento?.Hd}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EventTable;
