import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const isLoading = useSelector((state) => {
    return state.isLoading.value;
  });
  console.log(isLoading);
  return (
    <>
      {isLoading && <Loader />}
      <Navbar />
      <Main />
    </>
  );
}

export default App;
