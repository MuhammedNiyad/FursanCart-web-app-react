import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useQuery } from "react-query";
import { getAllBanner } from "../../utils/apis";
import { useEffect, useState } from "react";

// const banners = [
//   {
//     title: " The New Standard",
//     sub: "uunder favourable smartwatches",
//     rate: "1253.00",
//     image: "/comp.png",
//     link: "#",
//   },
//   {
//     title: " The New Standard",
//     sub: "uunder favourable smartwatches",
//     rate: "1253.00",
//     image: "/comp.png",
//     link: "#",
//   },
//   {
//     title: " The New Standard",
//     sub: "uunder favourable smartwatches",
//     rate: "1253.00",
//     image: "/comp.png",
//     link: "#",
//   },
//   {
//     title: " The New Standard",
//     sub: "uunder favourable smartwatches",
//     rate: "1253.00",
//     image: "/comp.png",
//     link: "#",
//   },
// ];

export const Banner = () => {
  const { data: banner } = useQuery("getallbanner", getAllBanner);

  const [sliderBanner, setSliderBanner] = useState<any[]>([]);

  useEffect(() => {
    if (banner?.data) {
      setSliderBanner(
        banner?.data?.filter((item: any) => item.type === "SLIDER")
      );
    }
  }, [banner?.data]);

  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          // dynamicBullets: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        {sliderBanner.map((it, i) => (
          <SwiperSlide key={i} className="-z-10">
            {/* <div className="text-left">
              <h1 className="text-3xl xl:text-6xl  xl:w-[300px]  ">
                {it.bannerTitle}
              </h1>
              <p className="font-bold text-base">"{it.sub}"</p>
              <p className="font-bold text-base">"{it.sub}"</p>
              <br />
              <p>
                From
                <br />
                <span className="text-4xl font-extrabold">${it.rate}</span>
              </p>
            </div> */}
            <div className=" w-full h-full flex justify-center items-center">
              <img
                src={it.banner[0]?.url}
                alt={"banner"}
                className=" md:w-[95%] lg:h-[400px] xl:w-[76%]  xl:h-[500px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
