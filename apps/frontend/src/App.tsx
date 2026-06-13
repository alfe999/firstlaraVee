import { useState, useEffect } from "react";
import { fetchAllPensioners } from "./services/pensionerService";
import type { pensioner } from "./types/pensioner";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import CreatePensioner from "./pages/CreatePensioner";


function App() {
  //props -> properties, parameter pipasan
  const [pensioners, setPensioners] = useState([] as pensioner[]);
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
  
          <Route path="/" element={<PensionerTable pensioner={pensioners} />} />
  
          <Route path="/pensioner/create" element={<CreatePensioner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
