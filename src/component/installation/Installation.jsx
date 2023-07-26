import { Codeshare } from "../codeshare/Codeshare";
import "../installation/Installation.css";

export const Installation = () => {
  return (
    <div className="installation__container">
      <h1>Get Started</h1>
      <p>
        ElementHub is a collection of web components that can help you create
        websites faster and better. Componently helps you to quickly build your
        Dream Project, by focusing much on Functionality, because we take care
        of your Designs.
      </p>
      <h1>Installation</h1>
      <p>
        You can add Componently to your Website/Project via the free{" "}
        <b>unpkg CDN</b>. Just add the following <b>link</b> element into your
        page's <b>head</b>, before your project's stylesheets
      </p>
      {/*    <--- import to stylesheet---->
       */}
      <Codeshare
        code={`<link rel="stylesheet" href="https://elementhub.netlify.app/style/main.css" />`}
      />
      <p>
        Also you can import to your stylesheets by <b>import link</b>
      </p>
      <Codeshare
        code={`@import url('https://elementhub.netlify.app/style/main.css')`}
      />

      <h3>Using EmelmentHub style to your web pages </h3>
      <p>
        After linking to your style you can simply write the class or className
        for your HTML element and style will be applied to your elements
      </p>

      <div className="showcase__btn">
        <p>
          {" "}
          <b>Example: </b> button before Adding ElementHub Styles{" "}
        </p>
        <button>Button</button>
      </div>

      <Codeshare code={`<button class='btn'>Button</button>`} />

      <div className="showcase__btn">
        <p>button after Adding ElementHub Styles </p>
        <button className="btn">Button</button>
      </div>
    </div>
  );
};
