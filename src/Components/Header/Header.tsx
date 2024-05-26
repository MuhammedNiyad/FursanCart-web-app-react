import { Button, Popconfirm, Popover, message } from "antd";
import { useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { BsSuitHeart } from "react-icons/bs";
import { HiOutlineLogout, HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { SlSocialDropbox } from "react-icons/sl";
import { TbUser } from "react-icons/tb";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getUser } from "../../helpers/loggedUser";
import styles from "../../styles/Home.module.css";
import { getCartData } from "../../utils/apis";
import { Departments } from "../Departments/Departments";
import { Menu } from "../Menu/Menu";
import { SearchBar } from "../SearchBar/SearchBar";

const cartBody = (
  <div>
    <div className="flex justify-between items-center gap-5">
      <div>
        <img src="/comps.jpg" width={100} height={100} alt="fsh" />
      </div>
      <div>Item name</div>
      <div>
        <Popconfirm title="">
          <Button danger>remove</Button>
        </Popconfirm>
      </div>
    </div>
  </div>
);

// const menuItems = [
//   {
//     title: "Home",
//     link: "#",
//   },
//   {
//     title: "Blog",
//     link: "#",
//   },
//   {
//     title: "About Us",
//     link: "#",
//   },
//   {
//     title: "FAQs",
//     link: "#",
//   },
//   {
//     title: "Contact Us",
//     link: "#",
//   },
// ];

export const Header = () => {
  // const [menu, setMenu] = useState(false);
  const [user, setUser] = useState({});
  const [cartLength, setCartLength] = useState(0);

  const { data: cartData } = useQuery("getcartdataforlengthshow", getCartData);

  useEffect(() => {
    if (cartData?.data) {
      setCartLength(cartData?.data?.CartProducts?.length);
    }
  }, [cartData?.data]);

  useEffect(() => {
    setUser(() => getUser());
  }, []);

  const location = useLocation();

  // const transition = useTransition(menu, {
  //   from: { x: -100, y: 0, opacity: 0, delay: 200 },
  //   enter: { x: 0, y: 0, opacity: 1 },
  //   leave: { x: -90, y: 0, opacity: 0, delay: 200 },
  // });

  const signOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser({});
    message.success("You are signed out!");
    window.location.reload();
  };

  return (
    <div className="flex justify-center relative bg-white">
      <div className="w-full xl:max-w-full ">
        <div>
          <div className="w-full xl:max-w-[80%] leading-2 my-2 pb-2 flex justify-evenly flex-wrap items-center sm:flex sm:justify-between lg:justify-end  mx-auto">
            <span className="flex justify-between gap-1 items-center px-2 lg:border-r mx-2">
              <BiDollar className="text-lg" />
              Currency
            </span>
            <span className="px-3">
              {user ? (
                <button className="pt-2">
                  {""}
                  <HiOutlineLogout
                    className="text-xl"
                    onClick={() => signOut()}
                  />
                </button>
              ) : (
                <a
                  href="/authorize"
                  className="flex justify-between gap-1 items-center "
                >
                  <TbUser className="text-lg" /> Register Or Sign In
                </a>
              )}
            </span>
          </div>
          <hr className="w-screen absolute left-0 right-0" />

          <div>
            <nav className={` bg-amber-400 py-5 lg:hidden  duration-300`}>
              <div className=" md:max-w-[100%] lg:max-w-[100%] w-full flex justify-center sm:px-12 md:px-20 relative">
                <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[1200px] w-full flex justify-between px-2">
                  {/* Menu Section */}
                  <div className="flex justify-between items-center gap-2 ">
                    <Menu />
                    <span>
                      <a href="/">
                        <img
                          src="/fursanLogo.svg"
                          alt="Vercel Logo"
                          width={20}
                          height={20}
                          className="sm:w-[50px]"
                        />
                      </a>
                    </span>
                  </div>

                  <div className="flex justify-evenly items-center gap-5 text-2xl">
                    <span>
                      <SearchBar />
                    </span>
                    <span>
                      <a href="/authorize">
                        <TbUser />
                      </a>
                    </span>
                    <div className="relative">
                      <Popover content={cartBody} title="Cart" trigger="click">
                        <a href="/cart">
                          <span className={styles.carticon}>
                            <HiOutlineShoppingBag className="" />
                            {cartLength > 0 && (
                              <span className={styles.cartBadge}>
                                {cartLength}
                              </span>
                            )}
                          </span>
                        </a>
                      </Popover>
                    </div>
                    <span>
                      <a href="/user/orders">
                        <SlSocialDropbox size={25} />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
            {/* {router.pathname !== "/" && <div className="bg-slate-50 p-5 text-xl">
            Home > {router.query.slug}
            </div>} */}
          </div>
        </div>
        {location.pathname == "/" ? (
          <nav className="hidden lg:block mt-6 xl:max-w-[80%] duration-300  mx-auto px-5">
            <section className="flex justify-between items-center my-2 mb-7">
              <div className="flex gap-3 items-center">
                <a href="/">
                  <img
                    src="/fursanLogo.svg"
                    alt="Vercel Logo"
                    width={70}
                    height={50}
                  />
                </a>
                <div>
                  <Menu />
                </div>
              </div>
              {/* search bar */}
              <div className="border-2 border-amber-400 w-[620px] h-[48px] bg-white rounded-full flex justify-between items-center ">
                <form className="text-slate-500 text-lg h-full w-[90%]">
                  <input
                    type="text"
                    className="rounded-full h-full w-[full] border-amber-400 px-3 outline-none"
                    placeholder="Search for Products"
                  />
                </form>

                <span className="flex w-[12rem] items-center gap-1 mx-1">
                  <p className="text-base text-nowrap">All Categories</p>
                  <IoIosArrowDown />
                </span>
                <span className=" h-full bg-amber-400 text-black w-24 rounded-r-full flex justify-center items-center text-3xl">
                  <RiSearchLine />
                </span>
              </div>
              <div className="flex justify-around gap-3 text-2xl">
                <span>
                  <BsSuitHeart />
                </span>
                <div className="relative">
                  <Popover content={cartBody} title="Cart" trigger="click">
                  <a href="/cart">
                          <span className={styles.carticon}>
                            <HiOutlineShoppingBag className="" />
                            {cartLength > 0 && (
                              <span className={styles.cartBadge}>
                                {cartLength}
                              </span>
                            )}
                          </span>
                        </a>
                  </Popover>
                </div>
                <span>
                  <a href="/user/orders">
                    <SlSocialDropbox size={25} />
                  </a>
                </span>
                {/* <span>
                  <BiDollar className="text-lg" /> 
                </span> */}
              </div>
            </section>
            <section className="px-2 flex justify-between items-center pr-3">
              <div className="px-2 flex gap-4 items-center text-sm">
                <Departments title={"All Departments"} icon={"menu"} />
                <div>
                  <p className="font-bold text-orange-500 flex items-center justify-between gap-2">
                    Super Deals <IoIosArrowDown />
                  </p>
                </div>
                <div>
                  <p className="font-bold ">Features Brands </p>
                </div>
                <div>
                  <p className="font-bold ">Trending Styles</p>
                </div>
                <div>
                  <p className="font-bold ">Gift Cards</p>
                </div>
              </div>
              <p>Free Shiping on Order $50+</p>
            </section>
            <hr className="w-screen absolute left-0 right-0" />
          </nav>
        ) : (
          <nav className="hidden lg:block my-5  duration-300 ">
            <section className="flex justify-between items-center py-3 max-w-[80%] mx-auto">
              <div>
                <a href="/">
                  <img
                    src="/fursanLogo.svg"
                    alt="Vercel Logo"
                    width={70}
                    height={25}
                    className=""
                  />
                </a>
              </div>

              <div className="flex justify-evenly  gap-5 font-semibold">
                {/* <span className="text-2xl">
                  <HiMenu />
                </span> */}
                <a href="/" className="">
                  Home
                </a>
                <a href="/blog" className="">
                  Blog
                </a>
                <a href="/about-us" className="">
                  About Us
                </a>
                <a href="/faqs" className="">
                  FAQs
                </a>
                <a href="/contact-us" className="">
                  Contact Us
                </a>
              </div>
              <div className="flex gap-3 ">
                <span>
                  {" "}
                  <img
                    src="/headphone.svg"
                    alt="Vercel Logo"
                    width={40}
                    height={25}
                    className=""
                  />
                </span>
                <span>
                  <strong>Support</strong> (+800) 856 800 604
                  <br />
                  E-mail: info@fursancart.com
                </span>
              </div>
            </section>
            <section className="px-5 py-1 bg-amber-400 flex justify-evenly items-center  w-screen">
              <div className="flex justify-between items-center gap-5  w-full max-w-[80%]">
                <div>
                  <Departments title={"Shop By Departments"} icon={"caret"} />
                </div>
                <div className="w-[620px] h-[48px] bg-white rounded-full flex justify-between items-center ">
                  <form className="text-slate-500 text-lg h-full w-full">
                    <input
                      type="text"
                      className="rounded-[full] h-full w-full border-none px-3 outline-none"
                      placeholder="Search for Products"
                    />
                  </form>

                  <span className="flex w-[11rem] items-end gap-1 mx-1">
                    <p className="text-base text-nowrap">All Categories</p>
                    <IoIosArrowDown />
                  </span>
                  <span className="h-full bg-black/80 text-white w-24 rounded-r-full flex justify-center items-center text-3xl">
                    <RiSearchLine />
                  </span>
                </div>

                <div className="flex justify-around gap-3 text-2xl">
                  <span>
                    <BsSuitHeart />
                  </span>
                  <div>
                  <a href="/cart">
                          <span className={styles.carticon}>
                            <HiOutlineShoppingBag className="" />
                            {cartLength > 0 && (
                              <span className={styles.cartBadge}>
                                {cartLength}
                              </span>
                            )}
                          </span>
                        </a>
                  </div>
                  <span>
                    <a href="/user/orders">
                      <SlSocialDropbox size={25} />
                    </a>
                  </span>
                </div>
              </div>
            </section>
          </nav>
        )}
      </div>
    </div>
  );
};
