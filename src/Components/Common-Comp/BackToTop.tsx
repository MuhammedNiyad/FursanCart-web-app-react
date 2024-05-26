import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const BackToTop= () => {
  const [goUp, setGoUp] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return goUp ? (
    <div className="fixed right-4 bottom-10">
      <button
        className="bg-amber-400 p-3 rounded-md text-white opacity-50"
        onClick={scrollUp}
      >
        {" "}
        <AiOutlineArrowUp />
      </button>
    </div>
  ) : (
    <div></div>
  );
};
