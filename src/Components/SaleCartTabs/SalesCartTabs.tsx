import { Rate } from "antd";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { productData } from "../../lib/types";
import { APIClient } from "../../utils/axios";
import { CartIcon } from "../icons/CartIcon";

const ProductTypes = ["best_sales", "trending", "featured", "top_rated"];

// export const getProducts = async (): productData =>
export const getProducts = async (): Promise<productData[]> => {
  return await APIClient.get("https://dummyjson.com/products");
};

export const SalesCatTabs = () => {
  const [activeTab, setActiveTab] = useState(ProductTypes[0]);
  const [datas, setData] = useState<productData[]>([]);
  const { data, isLoading, isFetching, isSuccess } = useQuery<
    productData[],
    Error
  >("items", getProducts);

  // isSuccess && console.log(data.data.products);
  let items: productData[] = data || [];

  if (isSuccess) {
    //@ts-ignore
    items = data?.data?.products;
  }

  useEffect(() => {
    // console.log({ activeTab });
    items = items.filter((it) =>
      activeTab === "best_sales"
        ? it.category == "smartphones"
        : activeTab === "trending"
        ? it.category == "laptops"
        : activeTab === "featured"
        ? it.category == "skincare"
        : activeTab === "top_rated"
        ? it.rating > 4
        : ""
    );
    // console.log(items);
    setData(items);
  }, [activeTab]);

  // if (items.length > 0) {

  // }

  // const items = [
  //   {
  //     desc: "Wireless audio system Multiroom 360",
  //     image: "/products/img.jpg",
  //     price: "$685,00",
  //     type: "best_sales",
  //   },
  //   {
  //     desc: "Wireless audio system Multiroom 360",
  //     image: "/products/img.jpg",
  //     price: "$685,00",
  //     type: "best_sales",
  //   },
  //   {
  //     desc: "fdjknjdngjkdfgfdg",
  //     image: "/products/img.jpg",
  //     price: "$685,00",
  //     type: "trending",
  //   },
  //   {
  //     desc: "gdfghdfgfdbfdbfdgrehgrg",
  //     image: "/products/img.jpg",
  //     price: "$685,00",
  //     type: "featured",
  //   },
  //   {
  //     desc: "gdfgdfgfdgdf",
  //     image: "/products/img.jpg",
  //     price: "$685,00",
  //     type: "top_rated",
  //   },
  // ].filter((it) => it.type === activeTab);

  return (
    <div className="my-5">
      <section className=" cursor-pointer flex justify-center items-center gap-5  my-3 border-b text-[0.769rem] sm:text-lg">
        {ProductTypes.map((it, i) => (
          <div
            key={i}
            onClick={() => setActiveTab(it)}
            className={
              activeTab === it
                ? "font-extrabold scale-110 border-b-2 border-b-amber-300  transition-all relative after:content-[''] after:absolute after:-bottom-1 after:w-[0.40rem] after:h-[0.40rem] after:bg-amber-300   after:rotate-45"
                : " transition-all"
            }
          >
            {it === "best_sales"
              ? "Best Sales"
              : it === "trending"
              ? "Trending"
              : it === "featured"
              ? "Featured"
              : it === "top_rated" && "Top Rated"}
          </div>
        ))}
      </section>
      <section className="grid justify-center grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-2">
        {datas?.map((it, i) => (
          <div
            key={i}
            className="bg-white odd:mr-1  hover:scale-110 hover:shadow-md ease-in-out duration-300  grid place-items-center gap-1 max-w-[300px] "
          >
            <Link
              to={`/items/${it.id}/?prod=${it.title}`}
              className="w-full space-y-3"
            >
              <img
                className="object-fill w-full max-h-[180px]"
                src={it.thumbnail}
                width={140}
                height={100}
                alt={it.description}
              />
              <h3>{it.title}</h3>
              <p className="text-sm font-bold text-blue-800 text-wrap ">
                {it.description.substring(0, 30).concat(" . . .")}
              </p>
            </Link>

            <div className="self-end ">
              <Rate
                style={{
                  fontSize: "0.8rem",
                }}
                disabled
                allowHalf
                defaultValue={it.rating}
              />
              <div className="flex items-center justify-around w-full gap-1 text-lg font-bold ">
                <b>$ {it.price}</b>

                <CartIcon />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery<productData>("items", getProducts);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   // Fetch the products in a loop and add them to the queryClient
//   const products = await getProducts();
//   products.forEach((product) => {
//     queryClient.setQueryData(["items", product.id], product);
//   });

//   // Dehydrate the queryClient state
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
