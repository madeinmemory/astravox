import "./App.css";
import Home from "./pages/Home";
import SpaceObjectPage from "./pages/SpaceObjectPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/objects/:id" element={<SpaceObjectPage />} />
    </Routes>
  );
}

export default App;
