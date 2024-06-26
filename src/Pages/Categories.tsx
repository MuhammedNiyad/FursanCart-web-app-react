import { Button, Drawer, Pagination, Rate, Space, message } from "antd";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BiSlider } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useQuery } from "react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BackToTop } from "../Components/Common-Comp/BackToTop";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { CartIcon } from "../Components/icons/CartIcon";
import { getProductByBrand, getProductByTags, getProducts, useAddToCart } from "../utils/apis";
import { getUser, getUserId } from "../helpers/loggedUser";
import Currency from "../Components/Common-Comp/Currency";

const Categories = () => {
  const [open, setOpen] = useState(false);
  // const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const [product, setProduct] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cat = queryParams.get("cat");
  const isCat = !!cat;
  const tag = queryParams.get("tag");
  const isTag = !!tag;
  const navigate = useNavigate();
  const userData = getUser();
  const brandId = queryParams.get("Brand");
  const brandName = queryParams.get("name");
  const isBrand = !!brandId;

  // console.log(brandId , brandName);  

  const { data: datas } = useQuery("getAllProductsForCategory", getProducts, {
    enabled: isCat,
  });

  const { data: datasByBrand } = useQuery("getproductByBrand", () => getProductByBrand(brandId), { enabled: isBrand });


  useEffect(() => {
    if (datas?.data) {
      setProduct(datas?.data.filter((it: any) => it?.category?.name === cat));
    }
  }, [datas?.data]);

  // console.log(product);

  const { data: tagProd } = useQuery(
    "getTagProduct",
    () => getProductByTags(tag),
    { enabled: isTag }
  );

  useEffect(() => {
    if (tagProd?.data) {
      setProduct(tagProd?.data);
    }
  }, [tagProd?.data]);

  useEffect(() => {
    if (datasByBrand?.data) {
      setProduct(datasByBrand?.data)
    }
    
  },[datasByBrand?.data])
  // console.log("cat data: ", data);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // console.log("slug: ",router.asPath);

  const { mutate: toCartFromCat } = useAddToCart();

  const addToCart = (data: any) => {
    if (!userData) {
      navigate("/authorize");
    }

    const compainData = {
      varientId: data,
      quantity: 1,
      userId: getUserId(),
    };

    toCartFromCat(compainData, {
      onSuccess() {
        message.success("Item added to cart");
      },
      onError() {
        message.error("could not add item to cart");
      },
    });
  };

  return (
    <div>
      <Helmet>
        <title>{cat}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fursanFavIcon.svg" />
      </Helmet>
      <Header />
      <h1 className="text-2xl font-semibold capitalize m-5">
        {" "}
        {cat || tag || brandName}
      </h1>
      <section>
        <div className="flex justify-between px-4 bg-slate-50 py-3 mx-3 rounded-lg">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={showDrawer}
          >
            <BiSlider className="font-extrabold" /> Filters
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            Default sorting <MdKeyboardArrowDown />{" "}
          </div>
        </div>
      </section>
      <main className="grid grid-cols-2 gap-1 p-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {product.map((it: any, i: number) => (
          <div
            key={i}
            className="cursor-pointer bg-white odd:mr-1 border hover:scale-100 hover:shadow-md ease-in-out duration-300 p-3 flex flex-col items-center gap-1 justify-center max-w-[310px]"
          >
            <Link to={`/items/${it.id}/?prod=${it.name}`}>
              <div>
                <img
                  className="object-fill w-full max-h-[180px]"
                  src={it?.images[0]?.url}
                  width={100}
                  height={100}
                  alt={it.name}
                />
              </div>
              <p className="text-blue-800 font-bold pt-4 pb-2">{it.name}</p>
              <p className="text-sm">
                {it?.subText?.substring(0, 20).concat("...")}
              </p>
            </Link>

            <div className="">
              <Rate
                style={{
                  fontSize: "0.8rem",
                }}
                allowHalf
                disabled
                defaultValue={it.rating}
              />
              <div className=" font-bold text-lg flex justify-around items-center gap-1  w-full">
                <Currency amount={it?.price} />
                <span onClick={() => addToCart(it.variants[0]?.id)}>
                  <CartIcon />
                </span>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Pagination />
      <BackToTop />

      <Drawer
        // title="Drawer with extra actions"
        // placement={placement}
        width={300}
        onClose={onClose}
        open={open}
        className="z-[1001] "
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        {/* <FiltersSide /> */}
      </Drawer>
      <Footer />
    </div>
  );
};

export default Categories;
