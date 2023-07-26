import { Installation } from "../../component/installation/Installation";
import { Layout } from "../../component/layout/Layout";
import "../installation/Installation.css";

export const Getstarted = () => {
  return (
    <div className="home__container">
      <Layout children={<Installation />} />
    </div>
  );
};
