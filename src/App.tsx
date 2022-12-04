import React from "react";
import ReadQR from "./pages/ReadQR";
import GenerateQR from "./pages/GenerateQR";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/generateQR" element={<GenerateQR />} />
        <Route path="/readqr" element={<ReadQR />} />
      </Routes>
      {/* <CreateQR /> */}
    </div>
  );
}

export default App;
