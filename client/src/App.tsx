import Users from "./pages/Users";
import ReadQR from "./pages/ReadQR";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/readqr" element={<ReadQR />} />
      </Routes>
      {/* <CreateQR /> */}
    </div>
  );
}

export default App;
