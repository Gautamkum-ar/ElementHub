import { Installation } from "../../component/installation/Installation";
import { Layout } from "../../component/layout/Layout";
import "../components/Components.css";

export const Components = () => {
  return (
    <div className="home__container">
      <Layout children={<Installation />} />
    </div>
  );
};
