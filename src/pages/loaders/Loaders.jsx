import { Layout } from "../../component/layout/Layout";
import { Loader } from "../../pre-built-components/loader/Loader";

export const Loaders = () => {
  return (
    <div className="loaders__containers">
      <Layout children={<Loader />} />
    </div>
  );
};
