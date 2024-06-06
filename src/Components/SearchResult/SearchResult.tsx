import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { searchProduct } from "../../utils/apis";
import LoadingComp from "../Common-Comp/LoadingComp";

const SearchResult = ({ searchData,setSearchData }: any) => {
  // console.log(searchData);
  const [datas, setDatas] = useState<any[]>([]);
  // console.log(searchData);

  const isSearch = !!searchData;

  const { data: ProdData, isLoading } = useQuery(
    "searchproduct",
    () => searchProduct(searchData),
    { enabled: isSearch }
  );

  useEffect(() => {
    if (ProdData?.data) {
      setDatas(ProdData?.data);
      setSearchData('');
    }
  }, [ProdData?.data]);

  // console.log(ProdData?.data);

  return (
    <div>
      {ProdData?.data ? (
        <h3 className="text-2xl font-semibold capitalize m-5">Search Result</h3>
      ) : (
        ""
      )}
      {!isLoading ? (
        <section className="grid justify-center grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-2">
          {datas?.map((it, i) => (
            <div
              key={i}
              className="cursor-pointer bg-white odd:mr-1 border hover:scale-100 hover:shadow-md ease-in-out duration-300 p-3 flex flex-col items-center gap-1 justify-center max-w-[310px]"
            >
              <Link to={`/items/${it.id}/?prod=${it.name}`}>
                <img src={it.url} width={140} height={100} alt={"img"} />
                <p className="text-sm text-blue-800 font-bold ">
                  {it.name.substring(0, 20).concat("...")}
                </p>
                {/* <p>{it.id}</p> */}
              </Link>
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
