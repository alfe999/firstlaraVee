import type { pensioners } from "../types/pensioner";
import { useNavigate } from "react-router-dom";

function PensionerTable({ pensioners }: { pensioners: pensioners[] }) {
  const navigate = useNavigate();

  const handleAddPensioner = () => {
    navigate("/pensioner/create");
  };

  return (
    <>
      <h2>List of pensioners</h2>
      <button onClick={handleAddPensioner}>Add New Pensioner</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Serial Number</th>
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
              <td>{pensioner.serial_number}</td>
              <td>{pensioner.first_name}</td>
              <td>{pensioner.last_name}</td>
              <td>{pensioner.middle_name}</td>
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

export default PensionerTable;