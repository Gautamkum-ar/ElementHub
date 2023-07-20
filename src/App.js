import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navabr } from "./component/Navbar/Navbar";
import { Landing } from "./pages/landing/Landing";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navabr />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
