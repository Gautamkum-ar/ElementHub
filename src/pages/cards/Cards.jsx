import { Layout } from "../../component/layout/Layout";
import { Card } from "../../pre-built-components/card/Card";
import "../cards/Cards.css";

export const Cards = () => {
  return (
    <div className="card__container">
      <Layout children={<Card />} />
    </div>
  );
};
