import { useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";

export const Navabr = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <section className="logo" onClick={() => navigate("/")}>
        <h1>Element</h1>
        <span>Hub</span>
      </section>
      <section className="link">
        <ul>
          <li onClick={() => navigate("/installation")}>Docs</li>
          <li>Component</li>
        </ul>
      </section>
    </nav>
  );
};
