import { Codeshare, Layout } from "../../component";

export const Alerts = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Alert</h1>
        <p>
          Alerts are used to communicate a state that affects a system, feature
          or page.
        </p>
        <h3>Usages</h3>
        <div className="showcase">
          <div>
            <div className="alert">Alert</div>

            <div className="alert alert-success">Success Alert</div>

            <div className="alert alert-warning">Warning Alert</div>
          </div>
        </div>
        <p>
          To achieve the above alert, you need to follow the following code:
        </p>
        <Codeshare
          code={`< -- For Primary Alert -->
        <div className="alert">Alert</div>
< -- For Success Alert -->
<div className="alert alert-success">Success Alert</div>
< -- For Warning Alert -->
<div className="alert alert-warning">Warning Alert</div>`}
        />
        <h1>Outline Alert</h1>
        <p>
          Outline alerts are created by using alert class, followed by
          outline-variant.
        </p>
        <h3>Usages</h3>
        <div className="showcase">
          <div>
            <div className="alert outline-alert">Alert</div>

            <div className="alert alert-outline-success">Success Alert</div>

            <div className="alert alert-outline-warning">Warning Alert</div>
          </div>
        </div>
        <p>
          To achieve the above alert, you need to follow the following code:
        </p>
        <Codeshare
          code={`< -- For Primary Alert -->
        <div className="alert outline-alert">Alert</div>
< -- For Success Alert -->
<div className="alert alert-outline-success">Success Alert</div>
< -- For Warning Alert -->
<div className="alert alert-outline-warning">Warning Alert</div>`}
        />
      </div>
    </Layout>
  );
};
