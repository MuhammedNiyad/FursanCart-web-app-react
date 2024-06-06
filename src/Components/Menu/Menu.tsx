import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { SidebarFooter } from "../icons/SidebarFooter";

const menuItems = [
  {
    title: "My Accound",
    link: "/user/profile",
  },
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "FAQs",
    link: "faqs",
  },
  {
    title: "Contact Us",
    link: "contact-us",
  },
];
export const Menu = () => {
  const [menu, setMenu] = useState(false);
  //   const router = useRouter();
  const transition = useTransition(menu, {
    from: { x: -100, y: 0, opacity: 0, delay: 200 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -90, y: 0, opacity: 0, delay: 200 },
  });

  return (
    <div className="text-2xl">
      <HiMenu onClick={() => setMenu(true)} />
      <span className=" relative z-[1020]">
        {transition(
          (style, item) =>
            item && (
              <animated.div
                style={style}
                className={`${
                  !menu && "hidden"
                } fixed z-[1000] bg-white -left-1 top-0 h-screen w-[250px] sm:w-[450px] text-sm shadow-lg p-3`}
              >
                <div className="flex flex-col justify-between  relative h-full">
                  <div className=" mb-3 w-full flex justify-between items-center">
                    <img
                      src="/fursanLogo.svg"
                      alt="Rootsys Logo"
                      width={50}
                      height={20}
                      className="sm:w-[90px] pl-5"
                    />
                    <GrClose onClick={() => setMenu(false)} />
                  </div>
                  <div className=" h-full flex flex-col px-3 w-full">
                    {menuItems.map((it: any, i: number) => (
                      <Link key={i} to={it.link}>
                        <div className="cursor-pointer p-3 hover:bg-amber-300/40 focus:bg-amber-300/40 active:bg-amber-300/40 hover:scale-105 active:scale-105 focus:scale-105  duration-200 select-none">
                          {it.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="">
                    <SidebarFooter />
                  </div>
                </div>
              </animated.div>
            )
        )}
      </span>
    </div>
  );
};
