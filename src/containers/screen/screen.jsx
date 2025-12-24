import { useState } from "react";
import "./screen.css";

const Screen = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    
  };

  return (
    <div
      className="screen"
      onClick={handleClick}
    ></div>
  );
};

export default Screen;