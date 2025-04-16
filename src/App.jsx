import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Modal from "./components/Modal";

function App() {
  const isLoading = useSelector((state) => {
    return state.isLoading.value;
  });
  const isModalOpen = useSelector((state) => {
    return state.modal.isOpen;
  });

  return (
    <>
      {isModalOpen && <Modal />}
      {isLoading && <Loader />}
      <Navbar />
      {!isLoading && <Main />}
    </>
  );
}

export default App;
