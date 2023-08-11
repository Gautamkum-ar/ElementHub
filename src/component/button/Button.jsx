import { OutlineButton } from "../../pre-built-components/pre-button/Outline-Buttons";
import { Pre_Button } from "../../pre-built-components/pre-button/Pre-button";
import "../button/Button.css";
import { Codeshare } from "../codeshare/Codeshare";

export const Button = () => {
  return (
    <div className="button__container">
      <h1>Button</h1>
      <p>
        The Button component is used to trigger an action or event, such as
        submitting a form, opening a dialog, canceling an action, or performing
        a delete operation.
      </p>

      <h1>Usage</h1>
      <Pre_Button />
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
        If you are using <b> HTML ,CSS </b> For achive these buttons you have
        follow the following code:
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
      <h1>Outline Button</h1>

      <OutlineButton />

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
  );
};
