import {
  Button,
  Divider,
  Modal,
  Radio,
  Rate,
  Select,
  Space,
  message,
} from "antd";
import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { BsBank2, BsCashStack, BsLightningCharge } from "react-icons/bs";
import { CiCreditCard2 } from "react-icons/ci";
import { FaGooglePay, FaTags } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import AddAddressModal from "../Components/AddAddressModal/AddAddressModal";
import LoadingComp from "../Components/Common-Comp/LoadingComp";
import SuccessOrder from "../Components/Common-Comp/SuccessOrder";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import {
  getAllDeliveryTypes,
  getCartData,
  getOneProduct,
  getUserAddress,
  useAddToCart,
  useCreateOrder,
  useDecreaseQnty,
  useDeleteFromCart,
} from "../utils/apis";
import { getUserId } from "../helpers/loggedUser";

const Cart = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState<any>();
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [placeOrder, setPlaceOrder] = useState(false);
  const [successOrder, setSuccessOrder] = useState(false);
  const [cartData, setCartData] = useState<any>();
  const [deliveryCharge, setDeliveryCharge] = useState('');
  const [deliveryTypeId, setDeliveryTypeId] = useState('');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const prod = queryParams.get("prod");
  const qnt = queryParams.get("qnt");

  const { data: prodData } = useQuery(
    "getprodData",
    () => getOneProduct(prod),
    { enabled: !!prod }
  );

  const {
    data: userCartData,
    isLoading,
    refetch,
  } = useQuery("getCartData", getCartData, { enabled: !prod });

  const { data: addressData, refetch: addressRefetch } = useQuery(
    "getuserdelivery",
    getUserAddress
  );

  const { data: dlvryTypes } = useQuery(
    "getalldeliverytypes",
    getAllDeliveryTypes
  );

  const freeOptionId = dlvryTypes?.data.find(
    (it:any) => it.deliveryCharge === "0"
  )?.id;

  const { mutate: deleteformcart } = useDeleteFromCart();
  const { mutate: createorder } = useCreateOrder();
  const { mutate: addQnt } = useAddToCart();
  const { mutate: decreaseqnt } = useDecreaseQnty();

  useEffect(() => {
    setCartData(userCartData?.data);
  }, [userCartData]);

  useMemo(() => {
    addressRefetch();
  }, [addressModalOpen]);

  useMemo(() => {
    setAddress(addressData?.data[addressData?.data.length - 1]);
  }, [addressData]);

  const removeFromCartRedux = (id: string) => {
    deleteformcart(id, {
      onSuccess() {
        message.success("Item removed from your cart");
        refetch();
      },
      onError() {
        message.error("could not remove item");
      },
    });
  };

  const quantityIncrease = (id: number) => {
    // dispatch(qntityPlus(id));
    const data = {
      userId: getUserId(),
      varientId: id,
      quantity: 1,
    };
    addQnt(data, {
      onSuccess() {
        refetch();
      },
    });
  };

  const quantityDecrease = (id: any) => {
    const data = {
      cartItemId: id,
      quantity: 1,
    };
    decreaseqnt(data, {
      onSuccess() {
        refetch();
      },
    });
  };

  const goToPaymentPage = (id: string, qnty: number) => {
    navigate(`/cart/?prod=${id}&qnt=${qnty}`);
    window.location.reload();
  };

  const prodDiscount = (product: any, quanty: any) => {
    console.log(product);

    const originPrice = product?.price * quanty;
    const discAmount = product?.discountedAmount * quanty;
    const total = originPrice - discAmount;
    return total.toFixed(2);
  };

  const cartDiscount = (cartItems: any, cartPrice: any) => {
    let originPrice = 0;
    cartItems.forEach((items: any) => {
      const productPrc = +items?.productVarient?.product?.price;
      originPrice = originPrice += productPrc * items.quantity;
    });

    const total = originPrice - cartPrice;

    return total.toFixed(2);
  };

  const orderFinishAndNavigate = () => {
    setTimeout(() => {
      setSuccessOrder(false);
      navigate("/");
    }, 2000);
  };

  const createOrder = (productData: any, dataInCart: any, delvryId: any) => {
    // console.log(deliveryTypeId);
    // return
    if (!delvryId) {
      message.error("please add your delivery address");
      return;
    }
    const { product } = productData;
    const quantity = productData?.qnt;
    if (product) {
      const orderData = {
        custId: getUserId(),
        fromCart: false,
        dlvryId: delvryId,
        paymentType: "CashOnDelivery",
        paymentProvider: "onCash",
        deliveryTypeId:deliveryTypeId,
        items: [
          {
            productId: product?.variants[0]?.id,
            quantity: +quantity,
          },
        ],
      };
      createorder(orderData, {
        onSuccess() {
          setSuccessOrder(true);
          // orderFinishAndNavigate();
        },
        onError() {
          message.error("could not conform your order");
        },
      });
    } else {
      const orderData = {
        custId: getUserId(),
        fromCart: true,
        dlvryId: delvryId,
        paymentType: "CashOnDelivery",
        paymentProvider: "onCash",
        deliveryTypeId: deliveryTypeId,
        items: dataInCart?.CartProducts.map((product: any) => ({
          cartItemId: product.id,
        })),
      };
      createorder(orderData, {
        onSuccess() {
          setSuccessOrder(true);
          orderFinishAndNavigate();
        },
        onError() {
          message.error("could not conform your order");
        },
      });
    }
  };

  const handleSelectDeliveryType = (id:any) => {
      const selected = dlvryTypes?.data.find(
        (it: any) => it.id === id
    );
    
    console.log(selected);
    setDeliveryTypeId(selected.id)
    setDeliveryCharge(selected.deliveryCharge)
  }

  return (
    <div className="bg-slate-50/20">
      <Helmet>
        <title>My Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fursanFavIcon.svg" />
      </Helmet>
      <Header />
      <h1 className="text-2xl text-center my-5">
        {!prod ? "My Cart" : "Payment"}
      </h1>
      <br />
      <br />
      {!isLoading ? (
        cartData?.CartProducts?.length >= 1 || prod ? (
          <main className="mb-10 md:max-w-[80%] mx-auto relative grid md:grid-cols-2">
            {/* cart product showing section */}
            <section className="px-2 bg-white w-full">
              {prod && (
                <div className="border my-1 block">
                  <div className="p-2 font-bold bg-amber-400">
                    ORDER SUMMARY
                  </div>
                  <div className="flex justify-evenly items-center p-5">
                    <img
                      src={prodData?.data?.product?.images[0]?.url}
                      alt="img"
                      className="w-28 h-28"
                    />
                    <div className="text-left">
                      <h2 className="font-semibold">
                        {prodData?.data.product.name}
                      </h2>
                      <p className="py-2   ">
                        {prodData?.data?.product?.description}
                      </p>
                      <p className="py-2">
                        quantity <span className="font-semibold ">{qnt}</span>
                      </p>
                      <div className="flex gap-1 flex-wrap">
                        <p className="text-slate-400 line-through">
                          {prodData?.data.product.price}
                        </p>
                        <h4 className="font-semibold">
                          {prodData?.data?.product.discountedAmount}
                        </h4>
                        <p className="text-xs text-green-500 align-text-bottom">
                          {prodData?.data.product.discount_percent}% off with
                          special offer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {cartData?.CartProducts.map((it: any) => (
                <div
                  key={it.id}
                  className=" w-full pt-4 border my-2 shadow-sm "
                >
                  <section className="flex items-center">
                    <img
                      src={it.productVarient.product.images[0].url}
                      width={100}
                      height={100}
                      alt="djs"
                    />
                    <div>
                      <p>{it.productVarient.product.name}</p>
                      <div className="text-amber-400 flex gap-1 place-self-start my-3">
                        <Rate allowHalf defaultValue={2.5} />
                      </div>
                    </div>
                  </section>
                  <section className="flex items-center gap-3 px-2">
                    <div className="flex  ">
                      <Button
                        disabled={it.quantity >= it.stockQuantity}
                        className="rounded-full"
                        onClick={() => quantityIncrease(it.productVarientId)}
                      >
                        +
                      </Button>
                      <div className="w-10 flex justify-center items-center">
                        {it.quantity}
                      </div>
                      <Button
                        disabled={it.quantity <= 1}
                        className="rounded-full"
                        onClick={() => quantityDecrease(it.id)}
                      >
                        -
                      </Button>
                    </div>
                    <div className="my-3">
                      <p className="flex gap-2">
                        <span className="text-slate-400 line-through ">
                          SAR {it.productVarient.product.price}
                        </span>
                        <em className="text-black font-bold">
                          SAR {it.price}{" "}
                          <span className="text-green-500 text-xs inline-block align-bottom">
                            {it.productVarient.product.discount_percent}% off
                          </span>
                        </em>
                      </p>
                    </div>
                  </section>
                  <section className="border-t flex justify-around items-center ">
                    <div
                      className="hover:bg-slate-100 active:bg-slate-100 border-r w-full text-center flex justify-center items-center p-3 gap-1"
                      onClick={() => removeFromCartRedux(it.id)}
                    >
                      <RiDeleteBinLine /> Remove
                    </div>
                    <div
                      className="hover:bg-slate-100 active:bg-slate-100 w-full text-center flex justify-center items-center p-3 gap-1"
                      onClick={() =>
                        goToPaymentPage(
                          it.productVarient.product.id,
                          it.quantity
                        )
                      }
                    >
                      <BsLightningCharge /> Buy this now
                    </div>
                  </section>
                </div>
              ))}
              <section className="bg-white">
                <div>
                  <form
                    // action="#"
                    className="flex flex-wrap justify-center gap-5"
                  >
                    <div className="border rounded-full  flex justify-between items-center">
                      <input
                        type="text"
                        placeholder="Coupon Code "
                        className=" rounded-l-full pl-3 w-full outline-none"
                      />
                      <div className="bg-black text-white rounded-r-full  h-full px-6 py-2">
                        <FaTags />
                      </div>
                    </div>
                    <Button
                      htmlType="submit"
                      className="rounded-full px-5 bg-slate-200 hover:bg-slate-400 hover:text-white hover:border-none active:bg-slate-400 focus:bg-slate-200"
                    >
                      Update cart
                    </Button>
                  </form>
                </div>
              </section>
            </section>
            <Divider className="md:hidden" />

            <section className="w-full  pt-4 border my-5 shadow-sm px-2 ml-auto h-[19em] bg-white">
              <h3 className="font-bold">Price Details</h3>

              <table className="border-b border-dashed table-auto w-full leading-10">
                <tbody>
                  <tr>
                    <td>Your total Price would be </td>
                    <td className="text-right">
                      SAR{" "}
                      {cartData?.totalPrice || prodData?.data?.product.price}
                    </td>
                  </tr>
                  <tr className="">
                    <td>Discount</td>
                    <td className="text-right text-green-600 font-semibold">
                      SAR{" "}
                      {cartData
                        ? cartDiscount(
                            cartData?.CartProducts,
                            cartData?.totalPrice
                          )
                        : prodDiscount(prodData?.data.product, qnt)}
                    </td>
                  </tr>
                  <tr className="w-[100%]">
                    <td>Delivery Type</td>
                    {/* <td className="text-right text-green-600 font-semibold"> 
                      FREE Delivery
                    </td> */}
                    <td className="flex justify-end">
                      <Select
                        className="w-[250px] rounded-none border-none h-10 mb-1"
                        autoFocus={false}
                        defaultValue={freeOptionId}
                        onChange={handleSelectDeliveryType}
                        options={dlvryTypes?.data.map((it: any) => ({
                          value: it.id,
                          label: (
                            <div className="flex justify-between">
                              <p>{it.name}</p>
                              <p className="font-semibold">
                                SAR {it.deliveryCharge}
                              </p>
                            </div>
                          ),
                        }))}
                      />
                    </td>
                  </tr>
                  <tr className="border-t border-dashed">
                    <td>Total Amount</td>
                    <td className="text-right font-bold">
                      SAR{" "}
                      {+cartData?.totalPrice + +deliveryCharge ||
                        (+prodData?.data?.product.price -
                          +prodDiscount(prodData?.data.product, qnt) + +deliveryCharge )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={`text-xs text-green-600 font-semibold my-5 `}>
                You will save SAR{" "}
                {cartData
                  ? cartDiscount(cartData?.CartProducts, cartData?.totalPrice)
                  : prodDiscount(prodData?.data.product, qnt)}{" "}
                on this order
              </p>
              <div></div>
            </section>
            <section className="sticky bottom-0 shadow-sm py-2 px-5 flex justify-end w-full md:col-span-2">
              <Button
                className="h-10 bg-amber-400 font-bold rounded-md hover:bg-amber-500 active:bg-amber-500 focus:bg-amber-500 focus:border-none"
                onClick={() => setPlaceOrder(true)}
              >
                Place Order
              </Button>
            </section>

            {/* payment section */}
            <section
              className={`w-full md:col-span-2 md:mt-10 ${
                placeOrder ? "block" : "hidden"
              }`}
            >
              <div className="flex justify-between gap-2 flex-col md:flex-row ">
                <div className=" flex justify-between p-5 border my-1 w-full">
                  <div>
                    <h3 className="font-bold pb-3">Address</h3>
                    {address ? (
                      <div>
                        <p>
                          Full name : <span>{address.fullName}</span>
                        </p>
                        <p>
                          Phone no : <span>{address.phone}</span>
                        </p>
                        <p>
                          State : <span>{address.state}</span>
                        </p>
                        <p>
                          city : <span>{address.city}</span>
                        </p>
                        <p>
                          Pincode : <span>{address.pincode}</span>
                        </p>
                        <p>
                          House/Build no :{" "}
                          <span>{address.houseNoOrBuildingName}</span>
                        </p>
                        <p>
                          Building Type : <span>{address.type}</span>
                        </p>
                        <p>
                          Landmark : <span>{address.landmark}</span>
                        </p>
                        <p>
                          Address : <span>{address.address}</span>
                        </p>
                      </div>
                    ) : (
                      <p>Please add you delivery address</p>
                    )}
                  </div>
                  <div>
                    <Button onClick={() => setAddressModalOpen(true)}>
                      Change
                    </Button>
                  </div>
                </div>
                <div className="border my-1 w-full">
                  <div className="p-2 font-bold bg-amber-400">
                    PAYMENT OPTIONS
                  </div>
                  <div className="p-5">
                    <Radio.Group defaultValue={"cashOnDelivery"}>
                      <Space direction="vertical">
                        <Radio value={"upi"} disabled>
                          <div className="flex gap-3 items-center">
                            <FaGooglePay size={25} />
                            <p className="font-semibold">UPI Transaction</p>
                          </div>
                        </Radio>
                        <hr />
                        <Radio value={"wallets"} disabled>
                          <div className="flex gap-2 items-center">
                            <IoWalletOutline size={20} />
                            <p className="font-semibold">Wallets</p>
                          </div>
                        </Radio>
                        <hr />
                        <Radio value={"cards"} disabled>
                          <div className="flex gap-2 items-center">
                            <CiCreditCard2 size={20} />
                            <p className="font-semibold">
                              Credit / Debit / ATM card
                            </p>
                          </div>
                        </Radio>
                        <hr />
                        <Radio value={"netBanking"} disabled>
                          <div className="flex gap-2 items-center">
                            <BsBank2 />
                            <p className="font-semibold">Net Banking</p>
                          </div>
                        </Radio>
                        <hr />
                        <Radio value={"cashOnDelivery"}>
                          <div className="flex gap-2 items-center">
                            <BsCashStack />
                            <p className="font-semibold">Cash on delivery</p>
                          </div>
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div className="bg-amber-400 py-2 px-2 flex justify-between items-center">
                <p>For conform the Order</p>
                <Button
                  className="h-12"
                  onClick={() =>
                    createOrder(
                      { product: prodData?.data?.product, qnt },
                      cartData,
                      address?.id
                    )
                  }
                >
                  Confirm order
                </Button>
              </div>
            </section>
          </main>
        ) : (
          <div className="flex items-center justify-center">
            <h1>Your cart is empty</h1>
          </div>
        )
      ) : (
        <div>
          <LoadingComp />
        </div>
      )}
      <div
        className={
          successOrder
            ? "fixed inset-0 flex items-center justify-center"
            : "hidden"
        }
      >
        <SuccessOrder />
      </div>

      <Footer />
      <Modal
        title="Address"
        open={addressModalOpen}
        footer={false}
        onCancel={() => setAddressModalOpen(false)}
      >
        <AddAddressModal
          setOpen={setAddressModalOpen}
          setAddress={setAddress}
          address={address}
        />
      </Modal>
    </div>
  );
};

export default Cart;
