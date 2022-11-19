import { BrowserRouter, Routes, Route } from "react-router-dom";
import End from "./pages/End";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/game" element={<Game />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
