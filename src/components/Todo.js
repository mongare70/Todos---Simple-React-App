// Reusable component
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* Open Modal and Backdrop if modalIsOpen is true */}
      {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
      {modalIsOpen ? <Backdrop onClick={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;
