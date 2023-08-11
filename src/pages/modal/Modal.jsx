import { Layout } from "../../component/layout/Layout";
import { Modals } from "../../pre-built-components/modals/Modals";

export const Modal = () => {
  return (
    <div className="modal__container">
      <Layout children={<Modals />} />
    </div>
  );
};
