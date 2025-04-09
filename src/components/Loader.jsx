import { useState, useEffect } from "react";

const Loader = () => {
  const [showName, setShowName] = useState(false);
  const [moveUp, setMoveUp] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 2500);
    const moveUpTimer = setTimeout(() => {
      setMoveUp(true);
    }, 4500);
    return () => {
      clearTimeout(nameTimer);
      clearTimeout(moveUpTimer);
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
