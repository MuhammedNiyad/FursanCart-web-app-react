import { BsFacebook, BsGoogle, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="bg-white mt-5">
      <footer className="h-[400px] bg-slate-100/20 ">
        <div className="bg-amber-400 px-5  p-3 md:flex md:justify-between md:items-center text-center leading-9">
          <p className="">
            <span className="text-lg flex items-center gap-5">
              <SiMinutemailer className="text-2xl" /> Sign up to Newsletter
            </span>
            ...and recieve $20 coupon for first shopping
          </p>
          <div className="">
            <div className="bg-black text-white  w-full rounded-full flex ">
              <input
                type="text"
                placeholder="Email address"
                className="w-[70%] rounded-l-full pl-5 text-slate-700"
              />
              <div className="text-center w-[30%] font-bold">Sign Up</div>
            </div>
          </div>
        </div>
        <div>
          <div className="sm:flex sm:justify-around items-center py-5">
            <div className=" px-5">
              {/* <div className="bg-red-300 mx-auto"> */}
              <img
                src="/fursanLogo.svg"
                alt="Rootsys Logo"
                width={70}
                height={70}
                className="mx-auto"
              />
              {/* </div> */}
              <div className="flex gap-3 justify-center my-5">
                <span>
                  {" "}
                  <img
                    src="/headphone.svg"
                    alt="Vercel Logo"
                    width={35}
                    height={35}
                    // className="h-auto"
                    style={{
                      height: "auto",
                    }}
                  />
                </span>
                <span>
                  <strong>Support</strong> (+800) 856 800 604
                  <br />
                  E-mail: info@fursancart.com
                </span>
              </div>
              <div className="text-center">
                <b>Contact Info</b>
                <p>17 Princess Road,London, Greater London NW1 8JR, UK.</p>
              </div>
              <div className="flex justify-around mx-2">
                <BsFacebook /> <BsGoogle /> <BsTwitter /> <BsInstagram />
              </div>
            </div>
            <div className="">
              <p className="gap-2 my-4 grid place-items-start md:flex md:justify-center md:flex-col">
                <b className="my-3">Quick Links</b>
                <a href="/user/profile">My Account</a>
                <a href="/user/orders">Order Tracking</a>
                <a href="/user/wishlist">Wish List</a>
                <a href="#">Customer Service</a>
                <a href="#">Return / Exchange</a>
                <a href="#">FAQs</a>
                <a href="#">Product Support</a>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-slate-50 text-[0.8rem]">
            Powered by{" "}
            <span className="">
              <img
                src="/roosysLogo.png"
                alt="Rootsys Logo"
                width={100}
                height={20}
                className="sm:w-[150px] opacity-40"
              />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
