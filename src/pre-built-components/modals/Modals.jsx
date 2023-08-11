import { useState } from "react";
import "../modals/Modals.css";
import { Codeshare } from "../../component/codeshare/Codeshare";

export const Modals = () => {
  const [showModal, setShowModel] = useState(false);

  const handleShowModal = () => setShowModel(!showModal);
  const handleCloseModal = () => setShowModel(false);
  return (
    <div className="modals__main">
      <h1>Modal</h1>
      <p>
        The modal component is a component that can be used to display
        information to the user. It can be used to display information that is
        not important to the user, but is important to the application.
      </p>
      <h3>Usages</h3>
      <div className="show__modal">
        <button className="show-modal-btn" onClick={handleShowModal}>
          Click to Show the modal
        </button>
        {showModal && (
          <div className="modal-main">
            <div className="modal">
              <button className="dismiss-modal" onClick={handleCloseModal}>
                X
              </button>
              <div className="modal-content">
                <h1>This is Modal</h1>
              </div>
            </div>
          </div>
        )}
      </div>

      <p>To achive Above model you have to follow the Following code. </p>
      <h3>For Reactjs:</h3>
      <Codeshare
        code={`//React functions
       const [showModal, setShowModel] = useState(false);

       const handleShowModal = () => setShowModel(!showModal);
       const handleCloseModal = () => setShowModel(false);
      `}
      />

      <Codeshare
        code={` // for React you have to use the following code
<button className="show-modal-btn" onClick={handleShowModal}>
Click to Show the modal
</button>
{showModal && (
    <div className="modal-main">
        <div className="modal">
          <button className="dismiss-modal" onClick={handleCloseModal}>
            X
          </button>
          <div className="modal-content">
             <h1>This is Modal</h1>
           </div>
        </div>
    </div>
)}
`}
      />
    </div>
  );
};
