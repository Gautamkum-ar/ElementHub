import { Card } from "../../component/card/Card";
import { Layout } from "../../component/layout/Layout";
import "../cards/Cards.css";

export const Cards = () => {
  return (
    <div className="card__container">
      <Layout children={<Card />} />
    </div>
  );
};
