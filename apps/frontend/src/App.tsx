import { useState, useEffect } from "react";
import { fetchAllPensioners } from "./services/pensionerService";
import type { pensioners } from "./types/pensioner";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import CreatePensioner from "./pages/CreatePensioner";
import PensionerTable from "./components/PensionerTable";


function App() {
  //props -> properties, parameter pipasan
  const [pensioners, setPensioners] = useState([] as pensioners[]);
  const fetchData = async () => {
    const pensionerData = await fetchAllPensioners();
    setPensioners(pensionerData);
  };

  useEffect(() => {
    fetchData();
  }, []); //fetch data on component mount

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/pensioner" element={<PensionerTable pensioners={pensioners} />} />
          <Route path="/pensioner/create" element={<CreatePensioner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
