import type { pensioner } from "../types/pensioner";
import { useNavigate } from "react-router-dom";

function pensionerTable({ pensioners }: { pensioners: pensioner[] }) {
  const navigate = useNavigate();

  const handleAddpensioner = () => {
    navigate("/pensioner/create");
  };

  return (
    <>
      <h2>List of pensioners</h2>
      <button onClick={handleAddpensioner}>Add New Pensioner</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Middle Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pensioners.map((pensioner) => (
            <tr key={pensioner.id}>
              <td>{pensioner.id}</td>
              <td>{pensioner.first_name}</td>
              <td>{pensioner.last_name}</td>
              <td>{pensioner.last_name}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default pensionerTable;
