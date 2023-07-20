import "../layout/Layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout__container">
      <section className="left__sec">
        <h2>This is Left section</h2>
      </section>
      <section className="right__sec">{children}</section>
    </div>
  );
};
