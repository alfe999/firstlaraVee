import { useEffect } from "react";
import PensionerForm from "../components/PensionerForm";
import { fetchPensionerById } from "../services/pensionerService";

function UpdatePensioner({ id }: { id: number }) {
  const fetchData = async () => {
    await fetchPensionerById(id);
  };

  useEffect(() => {
    fetchData();
  }, []); //fetch data on component mount
  return <PensionerForm loadPensioners={fetchData} />;
}

export default UpdatePensioner;
