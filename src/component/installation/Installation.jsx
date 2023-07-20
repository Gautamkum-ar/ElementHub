import { Codeshare } from "../codeshare/Codeshare";
import "../installation/Installation.css";

export const Installation = () => {
  return (
    <div className="installation__container">
      <h3>Get Started</h3>
      <p>
        ElementHub is a collection of web components that can help you create
        websites faster and better. Componently helps you to quickly build your
        Dream Project, by focusing much on Functionality, because we take care
        of your Designs.
      </p>
      <h3>For Installation</h3>
      <p>
        You can add Componently to your Website/Project via the free unpkg CDN.
        Just add the following link element into your page's head, before your
        project's stylesheets.
      </p>

      <div className="code">
        {" "}
        <Codeshare
          code={` <h1 className="intro">
        Rapidly build modern websites without ever leaving your HTML.
      </h1>
      <p className="intro__details">
        A utility-first CSS framework packed with classes like flex, pt-4,
        text-center and rotate-90 that can be composed to build any design,
        directly in your markup.
      </p>
      <div className="buttons">
        <Link to="/installation">Get Started</Link>
      </div>`}
          highlight={"1-5"}
        />
      </div>
    </div>
  );
};
