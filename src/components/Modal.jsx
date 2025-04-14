import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className="modal-overlay">
      <aside className="modal">
        <div>
          <h2>Where do you want to go?</h2>
        </div>
        <div className="btn-container">
          <button type="button">See Project</button>
          <button type="button">GitHub</button>
          <button
            type="button"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Modal;
