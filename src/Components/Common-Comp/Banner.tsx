import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


const banners = [
  {
    title: " The New Standard",
    sub: "uunder favourable smartwatches",
    rate: "1253.00",
    image: "/comp.png",
    link: "#",
  },
  {
    title: " The New Standard",
    sub: "uunder favourable smartwatches",
    rate: "1253.00",
    image: "/comp.png",
    link: "#",
  },
  {
    title: " The New Standard",
    sub: "uunder favourable smartwatches",
    rate: "1253.00",
    image: "/comp.png",
    link: "#",
  },
  {
    title: " The New Standard",
    sub: "uunder favourable smartwatches",
    rate: "1253.00",
    image: "/comp.png",
    link: "#",
  },
];

export const Banner = () => {
  return (
    <div className="bg-[url('/banner.jpg')] max-h-[425px] h-[423px] bg-cover flex justify-cente items-center relative -z-50 w-screen ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          // dynamicBullets: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full text-center flex justify-center items-center  lg:w-[65%] xl:w-[40%]"
      >
        {banners.map((it, i) => (
          <SwiperSlide
            key={i}
            className="flex justify-between items-center md:pl-24 xl:pr-16 "
          >
            <div className="text-left">
              <h1 className="text-3xl xl:text-6xl  xl:w-[300px]  ">
                {it.title}
              </h1>
              <p className="font-bold text-base">{it.sub}</p>
              <br />
              <p>
                From
                <br />
                <span className="text-4xl font-extrabold">${it.rate}</span>
              </p>
            </div>
            <div>
              <img src={it.image} alt={it.sub} className="min-w-[200px]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
