import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const { projectLink, github, isForm, isError } = useSelector((state) => {
    return state.modal;
  });

  return (
    <div className="modal-overlay">
      <aside className={`modal ${isForm ? "formModal" : ""}`}>
        {!isForm ? (
          <>
            <div>
              <h2>Where do you want to go?</h2>
            </div>
            <div className="btn-container">
              {projectLink ? (
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
              ) : (
                <p>This project isn't uploaded to any website :P</p>
              )}
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
          </>
        ) : (
          <div>
            <h2>
              {isError ? "Message Sent!" : "Sorry, something went wrong!"}
            </h2>
            <div className="btn-container">
              <button
                className="ok-btn"
                type="button"
                onClick={() => {
                  dispatch(closeModal());
                }}
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default Modal;
