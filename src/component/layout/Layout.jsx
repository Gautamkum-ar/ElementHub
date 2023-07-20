import { NavLink } from "react-router-dom";
import { compoList } from "../../database/compolistdata";
import "../layout/Layout.css";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import { LiaGreaterThanSolid } from "react-icons/lia";

export const Layout = ({ children }) => {
  const breadcrumbs = useReactRouterBreadcrumbs();

  console.log(breadcrumbs);

  const iActive = ({ isActive }) => ({
    background: isActive ? "#086469" : "",
    color: isActive ? "#ffff" : "",
  });
  const aActive = ({ isActive }) => ({
    color: isActive ? "#086469" : "",
  });

  return (
    <div className="layout__container">
      <section className="left__sec">
        <h1>Get Started</h1>
        <NavLink style={iActive} className="intallation" to="/installation">
          Installation
        </NavLink>
        <div className="compo__list">
          <h3>Components</h3>
          {compoList.map((compo) => (
            <NavLink
              style={iActive}
              className="component__item"
              key={compo.id}
              to={compo.path}
            >
              {compo.name}
            </NavLink>
          ))}
        </div>
      </section>
      <section className="right__sec">
        <p className="breadcumbs">
          {breadcrumbs.map(({ match, breadcrumb }) => (
            <>
              {" "}
              <NavLink style={aActive} key={match.key} to={match.pathname}>
                {breadcrumb}
              </NavLink>
              <LiaGreaterThanSolid />
            </>
          ))}
        </p>

        {children}
      </section>
    </div>
  );
};
