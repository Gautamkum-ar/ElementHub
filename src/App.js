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
  Images,
  Loaders,
  Modal,
  Texts,
} from "./pages";
import { Navabr } from "./component";
import { Alerts } from "./pages/alert";

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
        <Route path="/images" element={<Images />} />
        <Route path="/texts" element={<Texts />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </div>
  );
}

export default App;
