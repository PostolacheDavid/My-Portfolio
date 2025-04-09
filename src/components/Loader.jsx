import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleValue } from "../features/isLoading/isLoadingSlice";

const Loader = () => {
  const [showName, setShowName] = useState(false);
  const [moveUp, setMoveUp] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 2500);
    const moveUpTimer = setTimeout(() => {
      setMoveUp(true);
    }, 4500);
    const unloadTimer = setTimeout(() => {
      dispatch(toggleValue());
    }, 10000);
    return () => {
      clearTimeout(nameTimer);
      clearTimeout(moveUpTimer);
      clearTimeout(unloadTimer);
    };
  }, []);

  return (
    <div className={`loader-overlay ${moveUp ? "move-up" : ""}`}>
      <div className={`loader-wrapper ${showName ? "slide-left" : ""}`}>
        <div className="loader"></div>
        <p className={`loader-name ${showName ? "slide-out" : ""}`}>
          Postolache David's Portfolio
        </p>
      </div>
    </div>
  );
};

export default Loader;
