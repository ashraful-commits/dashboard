import { useEffect, useRef, useState } from "react";

const useDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const refdown = useRef(null);
  const dropfunc = () => {
    setDropdown(!dropdown);
  };
  const outsideDown = (e) => {
    if (refdown.current && !refdown.current.contains(e.target)) {
      setDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", outsideDown);
    return () => {
      document.removeEventListener("click", outsideDown);
    };
  }, []);
  return { dropdown, dropfunc, refdown };
};

export default useDropdown;
