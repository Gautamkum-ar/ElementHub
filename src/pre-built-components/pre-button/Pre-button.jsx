import "../pre-button/Pre-button.css";

export const Pre_Button = () => {
  return (
    <div className="pre__buttons">
      <button className="btn">Button</button>
      <button className="btn btn-danger">Delete</button>
      <button className="btn btn-submit"> Subimt</button>
      <button className="btn btn-close">Close</button>
    </div>
  );
};
