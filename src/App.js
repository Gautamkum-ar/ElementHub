import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navabr } from "./component/Navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Getstarted } from "./pages/installation/Installation";
import { Buttons } from "./pages/button/Buttons";
import { Cards } from "./pages/cards/Cards";
import { Avatar } from "./pages/avatar/Avatar";
import { Loaders } from "./pages/loaders/Loaders";
import { Modal } from "./pages/modal/Modal";

function App() {
  return (
    <div className="App">
      <Navabr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/installation" element={<Getstarted />} />
        <Route path="/button" element={<Buttons />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/loader" element={<Loaders />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
