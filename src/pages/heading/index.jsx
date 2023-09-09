import { Codeshare, Layout } from "../../component";

export const Headings = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Headings</h1>
        <p>Heading are used to give heading of the content.</p>
        <h3>Usage</h3>
        <div className="showcase">
          <div className="head">
            <h1 class="master">Hello World</h1>
            <h2 className="submaster">Hello World</h2>
            <h3 className="miniheading">Hello World</h3>
            <h4 className="subminiheading">Hello World</h4>
            <h5 className="hyphenate">Hello World</h5>
            <h6 className="subhyphenate">Hello World</h6>
          </div>
        </div>
        <p>This is the default Headings from our component library</p>
        <Codeshare
          code={`< -- For Default Heading Component -->
          <h1 class="master">Hello World</h1>
            <h2 className="submaster">Hello World</h2>
            <h3 className="miniheading">Hello World</h3>
            <h4 className="subminiheading">Hello World</h4>
            <h5 className="hyphenate">Hello World</h5>
            <h6 className="subhyphenate">Hello World</h6>`}
        />
        <h1>Heading with Different Color</h1>
        <p>We have pre defined some Sizes for the Heading.</p>
        <h3>Usages</h3>
        <div className="showcase">
          {/* For Different Color Texts  */}
          <div className="head">
            <h1 class="head-cyan">Hello World</h1>
            <h2 class="head-red">Hello World</h2>
            <h3 class="head-green">Hello World</h3>
            <h4 class="head-yellow">Hello World</h4>
            <h5 class="head-gray">Hello World</h5>
            <h6 class="head-blue">Hello World</h6>
          </div>
        </div>
        <p>To achive above headings you have to follow the below code.</p>
        <Codeshare
          code={`// for different color heading 
          <h1 class="head-cyan">Hello World</h1>
          <h2 class="head-red">Hello World</h2>
          <h3 class="head-green">Hello World</h3>
          <h4 class="head-yellow">Hello World</h4>
          <h5 class="head-gray">Hello World</h5>
          <h6 class="head-blue">Hello World</h6>`}
        />
      </div>
    </Layout>
  );
};
