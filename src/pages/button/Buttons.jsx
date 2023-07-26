import { Button } from "../../component/button/Button";
import { Layout } from "../../component/layout/Layout";
import "../button/Buttons.css";

export const Buttons = () => {
  return (
    <div className="buttons__container">
      <Layout children={<Button />} />
    </div>
  );
};
