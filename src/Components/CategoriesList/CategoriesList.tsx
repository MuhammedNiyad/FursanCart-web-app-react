import { Button, Divider, Rate, message } from "antd";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { getUserId } from "../../helpers/loggedUser";
import { CategoryItems, ProductType } from "../../lib/types";
import { getCategories, getProducts, useAddToCart } from "../../utils/apis";
import { CartIcon } from "../icons/CartIcon";

// const getCategories = async () =>
//   await APIClient.get("https://dummyjson.com/products/categories");

export const CategoriesList = () => {
  const [categories, setCategories] = useState<any>([]);
  const [products, setProducts] = useState<ProductType[]>([]);

  const { data: catResponseData } = useQuery("categories", getCategories);
  const { data: prodResponseData } = useQuery("items", getProducts);
  const {mutate:Addtocart} = useAddToCart()
  const navigate = useNavigate();

  useEffect(() => {
    setCategories(catResponseData?.data);
    setProducts(prodResponseData?.data);
  }, [catResponseData, prodResponseData]);

  // console.log("category :", categories);
  // console.log("prodData :", products);

  const addToCart = (data: any) => {
    const compainData = {
      varientId: data,
      quantity: 1,
      userId: getUserId(),
    };

    Addtocart(compainData, {
      onSuccess() {
        message.success("Item added to cart");
      },
      onError() {
        message.error("could not add item to cart");
      },
    });
  };

  return (
    <div className="w-full">
      <main className="p-1 ">
        {categories
          ?.filter((o: CategoryItems) =>
            products?.map((k: ProductType) => k.category.name).includes(o.name)
          )
          .map((cat: CategoryItems, i: number) => (
            <section
              className="p-1 py-5 my-5 bg-white border border-b rounded-sm shadow-md last:border-none"
              key={i}
            >
              <div className="flex items-center justify-between px-5">
                <h3 className="py-2 text-xl font-extrabold capitalize">
                  {cat.name}
                </h3>
                <Button
                  className="bg-amber-500 text-white sm:w-[10rem] sm:h-[3rem] sm:text-lg "
                  onClick={() => navigate(`/items/?cat=${cat.name}`)}
                >
                  More
                </Button>
              </div>
              <Divider />
              <section className="grid justify-center grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {products
                  ?.filter((prod) =>
                    prod.category.name === cat.name ? prod : ""
                  )
                  .map((it) => (
                    <div
                      key={it.id}
                      className="bg-white odd:mr-1 border hover:scale-110 hover:shadow-md ease-in-out duration-300  grid place-items-center  max-w-[300px] relative"
                    >
                      <Link
                        to={`/items/${it.id}/?prod=${it.slug}`}
                        className="w-full space-y-3"
                      >
                        <img
                          className="object-fill w-full max-h-[180px]"
                          src={it?.images[0]?.url}
                          width={140}
                          height={100}
                          alt={it.description}
                        />
                        <h3>{it.name}</h3>
                        <p className="text-sm font-bold text-blue-800 text-wrap ">
                          {it.description.substring(0, 30).concat(" . . .")}
                        </p>
                      </Link>
                      {/* <div className="flex gap-1 text-amber-400 place-self-start ">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalfOutline />
                        <IoStarOutline />
                      </div> */}
                      <div className="self-end">
                        <Rate
                          style={{
                            fontSize: "0.8rem",
                          }}
                          allowHalf
                          disabled
                          defaultValue={it.rating}
                        />
                        <div className="flex items-center justify-around w-full gap-1 text-lg font-bold ">
                          <b>$ {it.price}</b>
                          <span onClick={() => addToCart(it.variants[0]?.id)}>
                            <CartIcon />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </section>
            </section>
          ))}
      </main>
    </div>
  );
};
