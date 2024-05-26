import { Helmet } from "react-helmet";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoriesList } from "../Components/CategoriesList/CategoriesList";
import { BackToTop } from "../Components/Common-Comp/BackToTop";
import { Banner } from "../Components/Common-Comp/Banner";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { SalesCatTabs } from "../Components/SaleCartTabs/SalesCartTabs";
import styles from "../styles/Home.module.css";

const Home = () => {
  

   const cats = [
     {
       img: "/comp.png",
       title: "Catch big Deals on This ",
     },
     {
       img: "/comp.png",
       title: "Catch big Deals on This ",
     },
     {
       img: "/comp.png",
       title: "Catch big Deals on This ",
     },
     {
       img: "/comp.png",
       title: "Catch big Deals on This ",
     },
   ];

   const brands = [
     // {
     //   name: "Apple",
     //   img: "/qpple.png",
     // },
     {
       name: "Samsung",
       img: "/samsung.jpg",
     },
     {
       name: "Asus",
       img: "/asus.jpg",
     },
     {
       name: "Asus",
       img: "/asus.jpg",
     },
     {
       name: "Asus",
       img: "/asus.jpg",
     },
     {
       name: "Asus",
       img: "/asus.jpg",
     },
     {
       name: "Asus",
       img: "/asus.jpg",
     },
     {
       name: "Asus",
       img: "/asus.jpg",
     },
     {
       name: "Asus",
       img: "/asus.jpg",
     },
     {
       name: "Asus",
       img: "/asus.jpg",
     },
   ];

   return (
     <div className={styles.container}>
       <Helmet>
         <title>Fursan Cart</title>
         <meta name="description" content="Generated by create next app" />
         <link rel="icon" href="/fursanFavIcon.svg" />
       </Helmet>
       <Header />
       <section className="overflow-hidden">
         <Banner />
       </section>
       <main className="p-5 w-full xl:max-w-[80%] grid place-items-center mx-auto">
         <div className="grid place-items-center">
           <section className="grid place-content-between place-items-center md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 ">
             {cats.map((it: any, i: number) => (
               <div
                 key={i}
                 className="mx-3 w-auto  bg-slate-200 py-3 flex justify-around items-center gap-1 my-3 flex-auto "
               >
                 <div>
                   <img
                     src={it.img}
                     width={200}
                     height={100}
                     alt="banner"
                     className="mx-auto"
                   />
                 </div>
                 <div className="uppercase text-2xl">
                   Catch big Deals on This <br />
                   <Link
                     className="text-base flex items-center gap-3 font-extrabold mt-5"
                     to="#"
                   >
                     Shop Now{" "}
                     <IoIosArrowDroprightCircle className="text-xl text-amber-400" />
                   </Link>
                 </div>
               </div>
             ))}
           </section>
         </div>
         <section className="sales-cat-tab">
           <SalesCatTabs />
         </section>

         <section className=" my-5  grid place-items-center w-full   ">
           <CategoriesList />
         </section>

         <section className=" flex justify-center gap-3 items-center w-full overflow-x-scroll px-5">
           <div className="flex justify-center items-center w-full ">
             <Swiper
               slidesPerView={2}
               spaceBetween={5}
               navigation={true}
               modules={[Navigation, Autoplay]}
               breakpoints={{
                 480: {
                   slidesPerView: 3,
                   spaceBetween: 10,
                 },
                 710: {
                   slidesPerView: 4,
                   spaceBetween: 10,
                 },
                 1024: {
                   slidesPerView: 5,
                   spaceBetween: 10,
                 },
                 1200: {
                   slidesPerView: 6,
                   spaceBetween: 10,
                 },
               }}
               centeredSlides={true}
               autoplay={{
                 delay: 3000,
                 disableOnInteraction: false,
               }}
               className="w-full h-[120px]"
             >
               {brands.map((it: any, i) => (
                 <SwiperSlide
                   key={i}
                   className="text-center flex justify-center items-center"
                 >
                   <img
                     style={{
                       minWidth: "150px",
                     }}
                     src={it.img}
                     width={150}
                     height={150}
                     alt={it.name}
                   />
                 </SwiperSlide>
               ))}
             </Swiper>
           </div>
         </section>
       </main>
       <Footer />
       <BackToTop />
     </div>
   );
}

export default Home