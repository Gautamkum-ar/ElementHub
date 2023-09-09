import { Link } from "react-router-dom";
import { Codeshare } from "../../component/codeshare";
import { Layout } from "../../component/layout";

export const Button = () => {
  return (
    <Layout
      children={
        <div className="container">
          <h1>Button</h1>
          <p>
            The Button component is used to trigger an action or event, such as
            submitting a form, opening a dialog, canceling an action, or
            performing a delete operation.
          </p>

          <h1>Usage</h1>
          <div className="showcase">
            <button className="btn">Button</button>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-submit"> Subimt</button>
            <button className="btn btn-close">Close</button>
          </div>
          <p>
            If you Are using <b> ReactJs </b> For achive these buttons you have
            follow the following code:
          </p>

          <Codeshare
            code={`      //for default button
      <button className="btn">Button</button>

     // for delete or remove button
    <button className="btn btn-danger">Delete</button>

    //for submit button 
    <button className="btn btn-submit"> Subimt</button>

    //for close button
    <button className="btn btn-close">Close</button>`}
          />
          <p>
            If you are using <b> HTML ,CSS </b> For achive these buttons you
            have follow the following code:
          </p>
          <Codeshare
            code={`      //for default button
      <button class="btn">Button</button>

     // for delete or remove button
    <button class="btn btn-danger">Delete</button>

    //for submit button 
    <button class="btn btn-submit"> Subimt</button>

    //for close button
    <button class="btn btn-close">Close</button>`}
          />

          <h1>Button With Links</h1>
          <p>Button with link is used to link from one page to another.</p>
          <h3>Usages</h3>
          <div className="showcase">
            <button className="btn link-btn">
              <Link to="">Button</Link>
            </button>
          </div>
          <p>
            To achieve the above buttons, you need to follow the following code:
          </p>
          <Codeshare
            code={` // for link Button
 <button className="link-btn"> <Link to="">Button</Link></button>`}
          />
          <h1>Icon Button</h1>
          <p>You can use Icons in your Buttons respectively.</p>
          <h3>Usages</h3>
          <div className="showcase">
            <button className="btn icon-btn">
              Button
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                class="cursor-pointer text-[#777]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
              </svg>
            </button>
          </div>
          <h1>Floating Action Button</h1>
          <p>You can use Icons in your Buttons respectively.</p>
          <h3>Usages</h3>
          <div className="showcase">
            <button className="btn float-btn">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
              </svg>
            </button>
          </div>
          <p>
            To achieve the above buttons, you need to follow the following code:
          </p>
          <Codeshare
            code={` // for link Button
 <button className="btn link-btn">Button <svg>+</svg></button>`}
          />
          <h1>Outline Button</h1>

          <div className="showcase">
            <button className="outline-btn">Button</button>
            <button className="outline-btn outline-delete">Delete </button>
            <button className="outline-btn outline-submit">Sumbit </button>
            <button className="outline-btn outline-cancel">Cancel </button>
            <button className="outline-btn outline-animation">Animation</button>
          </div>

          <p>To Achive these button you have to follow the following code</p>

          <Codeshare
            code={`// for default outline button
      <button className="outline-btn">Button</button>

      //for delete outline button
    <button className="outline-btn outline-delete">Delete </button>

    //for submit outline button
    <button className="outline-btn outline-submit">Sumbit </button>

    //for cancel outline button
    <button className="outline-btn outline-cancel">Cancel </button>

    //for animation outline button
    <button className="outline-btn outline-animation">Animation</button>`}
          />
        </div>
      }
    />
  );
};
