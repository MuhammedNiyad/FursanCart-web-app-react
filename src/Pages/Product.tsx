import { Divider, Rate, message } from "antd";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { BiCartDownload } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { PiLightningLight } from "react-icons/pi";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { getUserId, getUserToken } from "../helpers/loggedUser";
import { addToCart } from "../redux/slices/cartSlice";
import { APIClient } from "../utils/axios";
import { useAppDispatch } from "./../redux/hook";

const Product = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState("");
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const navigate = useNavigate();

  const getProduct = async () => {
    return APIClient.get(`https://dummyjson.com/products/${id}`);
  };

  const { data } = useQuery("getProductOne", getProduct);

  //   console.log(data?.data);
  

  const addToCartRedux = (data: any) => {
    if (getUserId() && getUserToken()) {
      console.log("added to redux");
      dispatch(addToCart({ ...data, quantity: quantity, userId: getUserId() }));
      message.success("Item added to cart");
    } else {
      message.error("Please login to add item to cart");
      navigate('/authorize')
    }

  };

  return (
    <div>
      <Helmet>
        <title>{data?.data.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../../public/fursanFavIcon.svg" />
      </Helmet>
      <Header />
      <div className="mt-10 px-5 w-full flex flex-col sm:flex-row gap-5 ">
        {/* image */}
        <div className="flex flex-col items-center gap-5 w-full h-full sm:w-1/2">
          <div className="w-full lg:w-[80%] h-[80%] ">
            <img
              src={selectedImg ? selectedImg : data?.data.thumbnail}
              alt=""
              className="w-full"
            />
          </div>
          <div className=" h-[20%] flex gap-5 w-full overflow-x-scroll justify-center items-center ">
            {data?.data.images.map((it: string, ind: number) => (
              <img
                key={ind}
                src={it}
                alt="product image"
                className="w-[15%]"
                onClick={() => setSelectedImg(it)}
              />
            ))}
          </div>
        </div>
        {/* details */}
        <div className="flex md:items-center sm:w-1/2 ">
          <div className="space-y-5 w-full">
            <h1 className="text-2xl lg:text-4xl font-bold">
              {data?.data.title}
            </h1>
            <p className="md:text-xl">{data?.data.description}</p>
            {/* rating */}
            <div className="flex gap-1 items-center">
              <Rate
                style={{
                  fontSize: "0.8rem",
                }}
                allowHalf
                disabled
                defaultValue={data?.data.rating}
              />
              <span>{`(${data?.data.rating})`}</span>
            </div>
            <Divider />
            {/* price */}
            <div className="px-5">
              <h3 className="text-xl md:text-2xl lg:text-4xl font-medium flex gap-2 items-center md:items-start">
                $ {data?.data.price}
                <span className="bg-gray-100 p-1 text-xs">
                  {data?.data.discountPercentage}% off
                </span>
              </h3>
            </div>
            <Divider />
            {/* quantity */}
            <div className="flex items-center gap-3">
              <div className="flex gap-2 items-center bg-gray-100 space-x-3 px-3 py-1 rounded-2xl">
                <button
                  title="decrease"
                  onClick={() => setQuantity((prev) => (prev -= 1))}
                  disabled={quantity <= 1}
                >
                  <FiMinus size={12} className="text-amber-500" />
                </button>
                <p>{quantity}</p>
                <button
                  title="increase"
                  onClick={() => setQuantity((prev) => (prev += 1))}
                  disabled={quantity >= data?.data.stock}
                >
                  <FaPlus size={12} className="text-amber-500" />
                </button>
              </div>
              <div>
                only <span className="text-orange-500">{data?.data.stock}</span>{" "}
                left in this item!
              </div>
            </div>
            {/* buy now and add cart button */}
            <div className="flex w-full gap-2 items-center justify-between">
              <button
                className="w-[50%] h-[35px] md:h-12 flex bg-gray-100 items-center justify-center rounded-2xl md:rounded-3xl gap-1 scale-95 hover:scale-100 duration-200"
                onClick={() => addToCartRedux(data?.data)}
              >
                <BiCartDownload
                  size={25}
                  className="p-1 rounded-full bg-amber-400 text-white"
                />{" "}
                add to cart
              </button>
              <button className="w-[50%] h-[35px] md:h-12 flex items-center bg-amber-400 justify-center text-white rounded-2xl md:rounded-3xl gap-1 scale-95 hover:scale-100 duration-200 ">
                <PiLightningLight
                  size={25}
                  className="p-1 rounded-full bg-amber-400 text-white"
                />{" "}
                buy now
              </button>
            </div>
            <div className="h-52"></div>
          </div>
        </div>
      </div>

      {/* product offers and delivery details  */}
      <div></div>

      {/* product info */}
      <div></div>

      {/* related product */}
      <div></div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Product;
