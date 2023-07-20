import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navabr } from "./component/Navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Components } from "./pages/components/Components";

function App() {
  return (
    <div className="App">
      <Navabr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/installation" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;
