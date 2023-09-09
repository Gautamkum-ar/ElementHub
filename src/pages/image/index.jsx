import { Codeshare, Layout } from "../../component";

export const Images = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Images</h1>
        <p>The Image component is used to display images.</p>
        <h3>Usage</h3>
        <div className="showcase">
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
            className="sm-img"
          />
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
            className="md-img"
          />
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
            className="lg-img"
          />
        </div>
        <p>
          We have fixed dimension for these images, to achive this image you
          have to follow the below code.
        </p>
        <Codeshare
          code={`< -- For Small Image 5rem x 5rem -->
<img className="sm-img" src="url"></img>

< -- For Medium Image 7rem x 7rem-->
<img className="md-img" src="url"></img>

< -- For Large Image 10rem x 10rem -->
<img className="lg-img" src="url"></img>

`}
        />
        <h1>Responsive Images</h1>
        <p>The Image component is used to display images.</p>
        <h3>Usage</h3>
        <div className="showcase">
          <div className="img">
            {" "}
            <img
              src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
              alt=""
              className="responsive-img"
            />
          </div>
        </div>
        <p>
          To achive this image you have to follow the below code,responsive
          image take full height and width of its parent element.
        </p>
        <Codeshare
          code={`< -- For responsive Image -->
<img className="responsive-img" src="url"></img>

`}
        />
        <h1>Rounded images</h1>
        <p>The Rounded Image component is used to display rounded images.</p>
        <h3>Usage</h3>
        <div className="showcase">
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
            className="sm-img rounded-img"
          />
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
            className="md-img rounded-img"
          />
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
            className="lg-img rounded-img"
          />
        </div>
        <p>To Achive above images you have to follow the below code.</p>
        <Codeshare
          code={`< -- For Small Rounded Image 5rem x 5rem -->
<img className="sm-img rounded-img" src="url"></img>

< -- For Medium Rounded Image 7rem x 7rem-->
<img className="md-img rounded-img" src="url"></img>

< -- For Large Rounded Image 10rem x 10rem -->
<img className="lg-img rounded-img" src="url"></img>

`}
        />
      </div>
    </Layout>
  );
};
