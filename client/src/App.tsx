import Users from "./pages/Users";
import ReadQR from "./pages/ReadQR";
import SearchUser from "./pages/SearchUser";
import CreateUser from "./pages/CreateUser";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/createuser" element={<CreateUser />} />
        <Route path="/users/searchuser" element={<SearchUser />} />
        <Route path="/readqr" element={<ReadQR />} />
      </Routes>
      {/* <CreateQR /> */}
    </div>
  );
}

export default App;
