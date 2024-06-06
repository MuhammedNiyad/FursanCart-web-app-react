import { Helmet } from "react-helmet";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { Button, Rate, message } from "antd";
import { useQuery } from "react-query";
import { getUserWishList, useDeleteFromWishList } from "../utils/apis";
import { getUserId } from "../helpers/loggedUser";
import LoadingComp from "../Components/Common-Comp/LoadingComp";

const WishListPage = () => {
  const { data: wishListData, isLoading, refetch } = useQuery("getwishlist", () =>
    getUserWishList(getUserId())
  );

  const { mutate: deleteFromWishList } = useDeleteFromWishList();

  const handleRemove = (id:string) => {
    deleteFromWishList(id, {
      onSuccess() {
        message.success('item removed from wishlist')
        refetch();
      },
      onError() {
        message.error('Failed to remove item from wishlist')
      }
    })
  }

  return (
    <div>
      <Helmet>
        <title>Fursancart wishlist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fursanFavIcon.svg" />
      </Helmet>
      <Header />
      <div className="">
        <h1 className="text-2xl text-center my-5">My Wishlist</h1>
      </div>
      <div className="max-w-[900px] mx-auto">
        {!isLoading ? (
          <>
            {wishListData?.data?.items.length > 0 ? (
              <>
                {wishListData?.data?.items?.map((it: any, id: number) => (
                  <div key={id} className="flex items-center justify-between border p-5 flex-col sm:flex-row">
                    <div className="flex flex-col sm:flex-row items-center">
                      <img
                        src={it?.Variant?.product?.images[0]?.url}
                        alt="img"
                        className="w-20"
                      />
                      <div>
                        <h2 className="text-lg">
                          {it?.Variant?.product?.name}
                        </h2>
                        <p>{it?.Variant?.product?.description}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <Rate defaultValue={4} />
                        <span>(4)</span>
                      </div>
                      <div className="flex gap-2 items-end ">
                        <h3 className="font-semibold">SAR 1,999</h3>
                        <h5 className="text-gray-400 line-through text-sm">
                          SAR 2499
                        </h5>
                        <p className="text-sm text text-green-500">18% off</p>
                      </div>
                    </div>
                    <Button onClick={()=>handleRemove(it.id)} className="bg-red-500 text-white">Remove</Button>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex items-center justify-center">
                <h1>Wish list is empty</h1>
              </div>
            )}
          </>
        ) : (
          <div>
            <LoadingComp />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishListPage;
