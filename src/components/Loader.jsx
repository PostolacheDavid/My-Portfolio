import { useState, useEffect } from "react";

const Loader = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-overlay">
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
