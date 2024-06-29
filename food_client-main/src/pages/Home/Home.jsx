import CardItem from "../../components/CardItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadLine from "../../components/HeadLine";

import { useQueries } from "@tanstack/react-query";
import {
  getNewProducts,
  getSellingProducts,
  getSlides,
  getSuperDiscountProducts,
} from "../../services/homeServices";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const Home = () => {
  const [selling_products, new_products, super_discount_products, slides] =
    useQueries({
      queries: [
        {
          queryKey: "selling_products",
          queryFn: getSellingProducts,
          staleTime: 30000,
          gcTime: 50000,
        },
        {
          queryKey: "new_products",
          queryFn: getNewProducts,
          staleTime: 30000,
          gcTime: 50000,
        },
        {
          queryKey: "super_discount_products",
          queryFn: getSuperDiscountProducts,
          staleTime: 30000,
          gcTime: 50000,
        },
        {
          queryKey: "slides",
          queryFn: getSlides,
          staleTime: 30000,
          gcTime: 50000,
        },
      ],
    });

  if (
    selling_products.isLoading ||
    new_products.isLoading ||
    super_discount_products.isLoading ||
    slides.isLoading
  )
    return (
      <div className="text-center">
        <span className="text-blue-600 loading loading-spinner" />
      </div>
    );

  return (
    <div>
      <Slider {...settings}>
        {slides.data.map((el, idx) => (
          <img
            src={el.image}
            alt=""
            className="w-full h-[auto] md:h-[500px] object-cover"
            key={el.id}
          />
        ))}
      </Slider>

      <div className="my-5 max-w-[1080px] mx-auto px-7">
        <HeadLine>THEO DÕI CHÚNG TÔI QUA KÊNH</HeadLine>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          <div className="bg-[#280ef8] h-40 flex-center hover:scale-105 transition-base cursor-pointer">
            <p className="text-3xl font-bold text-center">FACEBOOK</p>
          </div>
          <div className="bg-[#fa2323] h-40 flex-center hover:scale-105 transition-base cursor-pointer">
            <p className="text-3xl font-bold text-center">YOUTUBE</p>
          </div>
          <div className="bg-[#dd5630] h-40 flex-center hover:scale-105 transition-base cursor-pointer">
            <p className="text-3xl font-bold text-center">SHOPEE</p>
          </div>
          <div className="bg-[#ff1df9] h-40 flex-center hover:scale-105 transition-base cursor-pointer">
            <p className="text-3xl font-bold text-center">LAZADA</p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <HeadLine className="text-[#ff0000] text-4xl">
          SẢN PHẨM MỚI RA MẮT
        </HeadLine>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[1080px] mx-auto px-7">
          {new_products?.data?.map((el, idx) => (
            <CardItem
              key={idx}
              name={el.name}
              new_price={el.new_price}
              old_price={el.old_price}
              id={el.id}
              image={el.image}
              percent_discount={el.percent_discount}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <HeadLine className="text-[#ff0000] text-4xl">SIÊU GIẢM GIÁ</HeadLine>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[1080px] mx-auto px-7">
          {super_discount_products?.data?.map((el, idx) => (
            <CardItem
              key={idx}
              name={el.name}
              new_price={el.new_price}
              old_price={el.old_price}
              id={el.id}
              image={el.image}
              percent_discount={el.percent_discount}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <HeadLine className="text-[#ff0000] text-4xl">
          SẢN PHẨM BÁN CHẠY
        </HeadLine>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[1080px] mx-auto px-7">
          {selling_products?.data?.map((el, idx) => (
            <CardItem
              key={idx}
              name={el.name}
              new_price={el.new_price}
              old_price={el.old_price}
              id={el.id}
              image={el.image}
              percent_discount={el.percent_discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
