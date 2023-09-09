import { Codeshare, Layout } from "../../component";

export const Cards = () => {
  return (
    <Layout
      children={
        <div className="container">
          <h1>Card</h1>
          <p>Cards are the container that display the content on the topic</p>
          <h3>Usages</h3>
          <div className="showcase">
            <div className="card">
              <h1>Hello World</h1>
              <p>This is Paragraph</p>
            </div>
          </div>
          <p>
            This is the basic card componet which is having the dimension of
            15rem x 15rem of width and height
          </p>
          <Codeshare
            code={`// basic card component
    <div className="card">
         <h1>Hello World</h1>
         <p>This is Paragraph</p>
    </div>`}
          />
          <h1>Card with dismiss</h1>
          <p>
            Card with Dismiss will help you to close the dialog/popup message.
          </p>
          <h3>Usages</h3>
          <div className="showcase">
            <div className="dismis-card">
              <span className="dismis">x</span>
              <p>This is card with dismiss</p>
            </div>
          </div>
          <p>
            This is the dismiss card componet for this you have to follow the
            following code
          </p>
          <Codeshare
            code={`// dismiss card component
            <div className="dismis-card">
            <span className="dismis">x</span>
            <p>This is card with dismiss</p>
          </div>`}
          />
          <h1>Card with shadow</h1>
          <p>Card with shadow will have shadow.</p>
          <h3>Usages</h3>
          <div className="showcase">
            <div className="shadow-card">
              <p>This is Card with shadow</p>
            </div>
          </div>
          <p>
            This is the shadows card componet for this you have to follow the
            following code
          </p>
          <Codeshare
            code={`// shadows card component
            <div className="shadow-card">
            <p>This is card with shadows</p>
          </div>`}
          />
          <h1>Vertical/Horizontal cards</h1>
          <p>Vertical/Horizontal cards will have shadow.</p>
          <h3>Usages</h3>
          <div className="showcase">
            <div className="card vertical-card">
              <p>This is Vertical cards</p>
            </div>
            <div className="card horizontal-card">
              <p>This is horizontal cards</p>
            </div>
          </div>
          <p>To achive this card you have to follow the below code</p>
          <Codeshare
            code={`// vertical card 
            <div className="card vertical-card">
            <p>This is Vertical card</p>
          </div>
          //for horizontal
          <div className="card horizontal-card">
              <p>This is horizontal cards</p>
            </div>`}
          />

          {/* image card  */}
          <h1>Cards with text overlay</h1>
          <p>
            Cards with text overlay is about to show the details about any image
          </p>
          <h3>Usages</h3>
          <div className="showcase">
            <div className="text-overlay-card">
              <img
                src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1689213269/1689213269206-210544264.png"
                alt="exampleImage"
              />
              <div className="details">
                <h3>The Sunset</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, odit.
                </p>
              </div>
            </div>
          </div>

          <p>To achive these style you have to follow the following code</p>
          <Codeshare
            code={`// for text overlay cards
    <div className="text-overlay-card">
            <img src="url" alt="exampleImage"/>
        <div className="details">
             <h3>The Sunset</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odit.</p>
        </div>
    </div>`}
          />

          <h1>Cards with badges</h1>
          <p>
            Cards with badges used to show the quantity on the top of the card.
          </p>
          <div className="showcase">
            <div className="badge-card">
              <span className="offer">10% off</span>
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
          <p>
            To achive these card style you have to follow the following code
          </p>

          <Codeshare
            code={`// for badge card
    <div className="badge-card">
    <span className="offer">10% off</span>
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
      }
    />
  );
};
