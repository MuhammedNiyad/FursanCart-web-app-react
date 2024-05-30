import { useQuery } from "react-query";
import { searchProduct } from "../../utils/apis";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import LoadingComp from "../Common-Comp/LoadingComp";

const SearchResult = ({ searchData }: any) => {
  // console.log(searchData);
	const [datas, setDatas] = useState<any[]>([]);
	console.log(searchData);

	const isSearch = !!searchData
	

  const { data: ProdData, isLoading } = useQuery("searchproduct", () =>
    searchProduct(searchData),{enabled:isSearch}
  );

  useEffect(() => {
    if (ProdData?.data) {
      setDatas(ProdData?.data);
    }
  }, [ProdData?.data]);

    console.log(ProdData?.data);

  return (
    <div>
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
                  src={it?.images[0]?.url}
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

export default SearchResult;
