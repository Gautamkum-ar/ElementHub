import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Avatar,
  Badge,
  Button,
  Cards,
  Getstarted,
  Headings,
  Home,
  Loaders,
  Modal,
} from "./pages";
import { Navabr } from "./component";

function App() {
  return (
    <div className="App">
      <Navabr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/installation" element={<Getstarted />} />
        <Route path="/button" element={<Button />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/loader" element={<Loaders />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/heading" element={<Headings />} />
      </Routes>
    </div>
  );
}

export default App;
