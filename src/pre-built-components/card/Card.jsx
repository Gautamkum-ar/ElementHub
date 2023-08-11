import { Codeshare } from "../../component/codeshare/Codeshare";
import "../card/Card.css";
export const Card = () => {
  return (
    <div className="card__main">
      <h1>Card</h1>
      <p>Cards are the container that display the content on the topic</p>
      <h3>Usages</h3>
      <div className="showcase__card">
        <div className="card">
          <h1>Hello World</h1>
          <p>This is Paragraph</p>
        </div>
      </div>
      <p>
        This is the basic card componet which is having the dimension of 15rem x
        15rem of width and height
      </p>
      <Codeshare
        code={`// basic card component
        <div className="card">
             <h1>Hello World</h1>
             <p>This is Paragraph</p>
        </div>`}
      />

      {/* image card  */}
      <h1>Image-Card</h1>
      <p>Image with card is about to show the details about any image</p>
      <h3>Usages</h3>
      <div className="showcase__card">
        <div className="img-card">
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1689213269/1689213269206-210544264.png"
            alt="exampleImage"
          />
          <div className="details">
            <h3>The Sunset</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              odit.
            </p>
          </div>
        </div>
      </div>

      <p>To achive these style you have to follow the following code</p>
      <Codeshare
        code={`// for image cards
        <div className="img-card">
                <img src="url" alt="exampleImage"/>
            <div className="details">
                 <h3>The Sunset</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odit.</p>
            </div>
        </div>`}
      />

      <h1>E-commerce Card</h1>
      <p>
        Ecommerce card will help you to show product on the product listing page
      </p>
      <div className="showcase__card">
        <div className="ecommerce-card">
          <div className="img-sec">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70"
              alt="example"
            />
          </div>
          <div className="product-details">
            <h3 className="title">SAMSUNG Galaxy F54 5G</h3>
            <p className="price">
              Rs 29000 <span>Rs 32000</span>
            </p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
      </div>
      <p>To achive these card style you have to follow the following code</p>

      <Codeshare
        code={`// for ecommerce product card
        <div className="ecommerce-card">
            <div className="img-sec">
               <img src="url" alt="example"/>
            </div>
        <div className="product-details">
              <h3 className="title">SAMSUNG Galaxy F54 5G</h3>
              <p className="price">Rs 29000 <span>Rs 32000</span> </p>
              <button className="add-to-cart">Add To Cart</button>
        </div>
      </div>`}
      />
    </div>
  );
};
