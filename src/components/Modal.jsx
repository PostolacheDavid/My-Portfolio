import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const { projectLink, github } = useSelector((state) => {
    return state.modal;
  });

  return (
    <div className="modal-overlay">
      <aside className="modal">
        <div>
          <h2>Where do you want to go?</h2>
        </div>
        <div className="btn-container">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            See Project
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            GitHub
          </a>
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
