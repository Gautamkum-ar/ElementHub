import { Codeshare, Layout } from "../../component";

export const Avatar = () => {
  return (
    <Layout
      children={
        <div className="container">
          <h1>Avatars</h1>
          <p>
            The Avatar component is used to represent a user, and displays the
            profile picture, initials or fallback icon.
          </p>

          <h3>Usages</h3>
          <div className="showcase">
            <div className="avatar">
              <img src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg" />
            </div>
          </div>
          <p>To achive these style you have to follow the following code</p>

          <Codeshare
            code={`<div className="avatar">
      <img src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg" />
    </div>`}
          />

          <h1>Avatars with different sizes</h1>
          <p>We have some predefined avatar of different sizes</p>

          <h3>Usages</h3>
          <div className="showcase">
            <div className="avatar-sm">
              <img
                src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
                alt=""
              />
            </div>
            <div className="avatar-md">
              <img
                src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
                alt=""
              />
            </div>
            <div className="avatar-lg">
              <img
                src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
                alt=""
              />
            </div>
          </div>
          <p>To achive these style you have to follow the following code </p>
          <Codeshare
            code={` // for small avatar size
    <div className="avatar-sm">
      <img src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"/>
    </div>
    //for medium avatar size
    <div className="avatar-md">
      <img src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"/>
    </div>
    // for large avatar size
      <div className="avatar-lg">
      <img src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"/>
    </div>`}
          />
        </div>
      }
    />
  );
};
