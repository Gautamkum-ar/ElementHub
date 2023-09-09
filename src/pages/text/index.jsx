import { Codeshare, Layout } from "../../component";

export const Texts = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Text</h1>
        <p>
          Text component is the used to render text and paragraphs within an
          interface. Our default text color is black.
        </p>
        <h3>Usage</h3>
        <div className="showcase">
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            velit sapiente, eveniet atque perferendis maxime possimus non, ut
            voluptatibus necessitatibus voluptatem, quae tempora tenetur quod.
          </p>
        </div>
        <p>To achive this text you have to follow the below code.</p>
        <Codeshare
          code={`//for default text
         <p className="text">Your Text </p>`}
        />
        <h1>Centered text</h1>
        <p>
          Centered text component is the used to render text and paragraphs in
          center within an interface. Our default text color is black.
        </p>
        <h3>Usage</h3>
        <div className="showcase">
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            velit sapiente, eveniet atque perferendis maxime possimus non, ut
            voluptatibus necessitatibus voluptatem, quae tempora tenetur quod.
          </p>
        </div>
        <p>To achive this text you have to follow the below code.</p>
        <Codeshare
          code={`//for default text
         <p className="text-center">Your Text </p>`}
        />
        <h1>Text with Styling</h1>
        <p>We have predefined some style/tranformation of the texts.</p>
        <h3>Usage</h3>
        <div className="showcase">
          <div style={{ width: "50%" }}>
            <p className="text-underline">
              Lorem, ipsum dolor sit amet consectetur
            </p>
            <p className="text-linethrough">
              Lorem, ipsum dolor sit amet consectetur
            </p>
            <p className="text-hilight">
              Lorem, ipsum dolor sit amet consectetur
            </p>
            <p className="text-italic">
              Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        <p>To achive this text you have to follow the below code.</p>
        <Codeshare
          code={`//for styled text
          <p className="text-underline">
              Lorem, ipsum dolor sit amet consectetur
            </p>
            <p className="text-linethrough">
              Lorem, ipsum dolor sit amet consectetur
            </p>
            <p className="text-hilight">
              Lorem, ipsum dolor sit amet consectetur
            </p>
            <p className="text-italic">
              Lorem, ipsum dolor sit amet consectetur
            </p>`}
        />
      </div>
    </Layout>
  );
};
