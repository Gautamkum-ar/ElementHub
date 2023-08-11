import { Layout } from "../../component/layout/Layout";
import { Avatars } from "../../pre-built-components/avatar/Avatars";

export const Avatar = () => {
  return (
    <div className="avatar__container">
      <Layout children={<Avatars />} />
    </div>
  );
};
