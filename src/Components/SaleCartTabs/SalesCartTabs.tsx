/* eslint-disable react-hooks/exhaustive-deps */
import { Rate } from "antd";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getProductByTags } from "../../utils/apis";
import LoadingComp from "../Common-Comp/LoadingComp";

// export const getProducts = async (): Promise<productData[]> => {
//   return await APIClient.get("https://dummyjson.com/products");
// };

export const SalesCatTabs = () => {
  const [activeTab, setActiveTab] = useState("bestOffer");
  const [datas, setDatas] = useState<any[]>([]);
  const { data, isLoading, refetch } = useQuery("getproductbytag", () =>
    getProductByTags(activeTab)
  );

  useEffect(() => {
    if (data?.data) {
      setDatas(data?.data);
    }
  }, [data?.data]);

  // console.log(activeTab);

  const tabItems = ["bestOffer", "trending", "featured", "topRated"];

  useEffect(() => {
    refetch();
  }, [activeTab]);

  return (
    <div className="my-5">
      <section className=" cursor-pointer flex justify-center items-center gap-5  my-3 border-b text-[0.769rem] sm:text-lg">
        {tabItems?.map((it, i) => (
          <div
            key={i}
            onClick={() => setActiveTab(it)}
            className={
              activeTab === it
                ? "font-extrabold scale-110 border-b-2 border-b-amber-300  transition-all relative after:content-[''] after:absolute after:-bottom-1 after:w-[0.40rem] after:h-[0.40rem] after:bg-amber-300   after:rotate-45"
                : " transition-all"
            }
          >
            {it === "bestOffer"
              ? "Best Offer"
              : it === "trending"
              ? "Trending"
              : it === "featured"
              ? "Featured"
              : it === "topRated" && "Top Rated"}
          </div>
        ))}
      </section>
      {!isLoading ? (
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
                  src={it.images[0]?.url}
                  width={140}
                  height={100}
                  alt={"img"}
                />
                <h3>{it.name}</h3>
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

                  {/* <CartIcon /> */}
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section>
          <LoadingComp />
        </section>
      )}
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
