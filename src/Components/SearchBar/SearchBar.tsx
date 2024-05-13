import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useTransition, animated } from "react-spring";

export const SearchBar = () => {
  const [showBar, setShowBar] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const transitions = useTransition(showBar, {
    from: { y: 20, opacity: 0, delay: 200 },
    enter: { y: 0, opacity: 1 },
    leave: { opacity: 0, delay: 200 },
  });
  if (showBar) {
    console.log(showBar);
    searchRef.current?.focus();
  }
  return (
    <div className="">
      <RiSearchLine
        onClick={() => {
          setShowBar(!showBar);
        }}
      />

      {/* {showBar && (
        <animated.div className=" absolute w-[95%] h-16 m-auto left-0 right-0 top-16 bg-white shadow-md px-2 py-3 ">
          <form className="border text-slate-500 text-lg h-full w-full  rounded-full flex justify-between  ">
            <input
              ref={searchRef}
              type="text"
              className="rounded-l-full w-full h-full border border-amber-400 px-3 "
              placeholder="Search for Products"
            />
            <div className="h-auto bg-amber-400 text-black w-16 rounded-r-full flex justify-center items-center text-xl">
              <RiSearchLine />
            </div>
          </form>
        </animated.div>
      )} */}

      {transitions(
        (style:any, item:any) =>
          item && (
            <animated.div
              className=" absolute w-[95%] h-16 m-auto left-0 right-0 top-16 bg-white shadow-md px-2 py-3 "
              style={style}
            >
              <form className="border text-slate-500 text-lg h-full w-full  rounded-full flex justify-between  ">
                <input
                  ref={searchRef}
                  type="text"
                  className="rounded-l-full w-full h-full border border-amber-400 px-3 "
                  placeholder="Search for Products"
                />
                <div className="h-auto bg-amber-400 text-black w-16 rounded-r-full flex justify-center items-center text-xl">
                  <RiSearchLine />
                </div>
              </form>
            </animated.div>
          )
      )}
    </div>
  );
};
