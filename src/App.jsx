import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Nav from "./core/nav/Nav";
import Gallery from "./pages/gallery/Gallery";
import CreateCharacter from "./pages/createCharacter/CreateCharacter";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/create" element={<CreateCharacter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
