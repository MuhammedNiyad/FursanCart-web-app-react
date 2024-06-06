import { useRef, useState } from "react";
import { BsCaretDown } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { useQuery } from "react-query";
import { animated, useTransition } from "react-spring";
import { getCategories } from "../../utils/apis";

export const Departments: React.FC<{
  title: string;
  icon: string;
}> = ({ title, icon }) => {
  const [isVisible, setisVisible] = useState(false);
  const [hovering, setHovering] = useState<any | null>(null);
  // const [ref, { height }] = useMeasure();
  // const props = useSpring({ heigth: isVisible ? height : 0 });
  const transition = useTransition(isVisible, {
    from: { x: 0, y: -100, opacity: 0, delay: 200 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -90, opacity: 0, delay: 200 },
  });

  const itemsRef = useRef<HTMLDivElement>(null);

  const { data: categoryData } = useQuery("getallcategory", getCategories);

  // const deps = [
  //   {
  //     name: "Computer & Accessories",
  //     links: [
  //       {
  //         link: "#",
  //         subCategory: "All Computers and accessories",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Laptops",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Desktops",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Monitores",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "NetWorking & Internet devices",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Computer Accessories",
  //       },
  //     ],
  //     image: "/comps.jpg",
  //   },
  //   {
  //     name: "Camera, Audio & Video",
  //     links: [
  //       {
  //         link: "#",
  //         subCategory: "All Computers and accessories",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Laptops",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Desktops",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Monitores",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "NetWorking & Internet devices",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Computer Accessories",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Mobiles & Tablets",
  //     links: [
  //       {
  //         link: "#",
  //         subCategory: "All Computers and accessories",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Laptops",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Desktops",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Monitores",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "NetWorking & Internet devices",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Computer Accessories",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Movie, Music & Video Game",
  //     links: [
  //       {
  //         link: "#",
  //         subCategory: "All Computers and accessories",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Laptops",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Desktops",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Monitores",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "NetWorking & Internet devices",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Computer Accessories",
  //       },
  //     ],
  //   },
  //   {
  //     name: "TV & Audio",
  //     links: [
  //       {
  //         link: "#",
  //         subCategory: "All Computers and accessories",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Laptops",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Desktops",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Monitores",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "NetWorking & Internet devices",
  //       },
  //       {
  //         link: "#",
  //         subCategory: "Computer Accessories",
  //       },
  //     ],
  //   },
  // ];

  const depss =
    categoryData?.data.map((categ: any) => {
      return {
        name: categ.name,
        image:categ?.image[0]?.url,
        links: categ.subCategories.map((subCateg: any) => {
          return {
            link: "#",
            subCategory: subCateg.name,
          };
        }),
      };
    }) || [];

  return (
    <div className="w-[300px] max-w-[340px] relative ">
      <span
        // after={deps}
        className={`cursor-pointer flex items-center gap-2  bg-amber-400 px-4 py-3 rounded-t-lg relative z-[1000]`}
        onClick={() => {
          setisVisible((prev) => !prev);
        }}
      >
        {icon == "menu" && <TfiMenuAlt />}
        <p className="font-bold">{title}</p>
        {icon == "caret" && <BsCaretDown />}
      </span>
      {transition((style: any, item: any) =>
        item ? (
          <animated.div
            className="bg-white shadow-md py-5 absolute w-full px-1 z-[100] top-[110%]"
            style={style}
          >
            {depss?.map((it:any, i:number) => (
              <div
                className={`border-b last:border-none p-2 flex justify-between group `}
                key={i}
                ref={itemsRef}
                onMouseOver={() => {
                  console.log(it);

                  setHovering(it);
                }}
              >
                {it.name}
                <IoIosArrowForward />
                {/* {hovering.state && ( */}
                <div className="absolute left-full top-1  shadow-sm  p-10 pb-0 min-w-[613px] max-w-[615px] hidden group-hover:block bg-white">
                  <div className="relative flex justify-between gap-5 w-full">
                    <div className=" ">
                      <h1 className=" font-bold">{hovering?.name}</h1>
                      <div className="flex flex-col gap-2 my-5">
                        {hovering?.links?.map((it: any, i: number) => (
                          <a
                            key={i}
                            href={it?.link}
                            className="hover:underline"
                          >
                            <span key={i}>{it.subCategory}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="self-end mt-auto">
                      <img
                        src={hovering?.image && "/fursanLogo.png"}
                        alt={hovering?.name}
                        className="max-w-[250px]"
                        width={250}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
                {/* )} */}
              </div>
            ))}
          </animated.div>
        ) : (
          ""
        )
      )}
      {/* {hovering && ( */}
      {/* )} */}
    </div>
  );
};
