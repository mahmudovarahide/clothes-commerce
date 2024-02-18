import { Swiper, SwiperSlide } from "swiper/react";
import DirectoryItem from "../directory-item/directory-item";
import { DirectoryContainer, CustomSwiper } from "./directory.style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "Jacket",
      imageUrl:
        "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull1.66a9af85.png&w=640&q=75",
      route: "shop/jackets",
    },
    {
      id: 2,
      title: "Bags",
      imageUrl:
        "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull2.9813d812.png&w=640&q=75",
      route: "shop/hats",
    },
    {
      id: 3,
      title: "Shoes",
      imageUrl:
        "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull3.168b2ce0.png&w=640&q=75",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "Men",
      imageUrl:
        "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdepartment1.43e0954c.png&w=640&q=75",
      route: "shop/men",
    },
    {
      id: 5,
      title: "Women",
      imageUrl:
        "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=828&q=75",
      route: "shop/women",
    },
  ];

  return (
    <CustomSwiper spaceBetween={5} slidesPerView={4} navigation>
      {categories.map((category) => {
        return (
          <SwiperSlide key={category.id}>
            <DirectoryContainer>
              <DirectoryItem category={category} />
            </DirectoryContainer>
          </SwiperSlide>
        );
      })}
    </CustomSwiper>
  );
};
export default Directory;
