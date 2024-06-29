import { useParams } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import parse from "html-react-parser";

import CardItem from "../../components/CardItem";
import HeadLine from "../../components/HeadLine";
import {
  getDetailProductById,
  getSimilarProductById,
} from "../../services/detailServices";
import { useCartContext } from "../../contexts/CartProvider";

const DetailProduct = () => {
  const params = useParams();
  const { handleAddToCart } = useCartContext();

  const [detail_product, similar_product] = useQueries({
    queries: [
      {
        queryKey: ["detail_product", params?.id],
        queryFn: () => getDetailProductById(params?.id),
        enabled: params.id !== undefined,
        staleTime: 30000,
        gcTime: 5000,
      },
      {
        queryKey: ["similar_product", params?.id],
        queryFn: () => getSimilarProductById(params?.id),
        enabled: params.id !== undefined,
        staleTime: 30000,
        gcTime: 5000,
      },
    ],
  });

  if (detail_product.isLoading || similar_product.isLoading)
    return (
      <div className="text-center">
        <span className="text-blue-600 loading loading-spinner" />
      </div>
    );

  return (
    <div className="px-4 ld:min-w-[1080px] max-w-[1080px] mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <img
          src={detail_product.data.image}
          alt=""
          className="object-cover rounded-md w-full h-[300px]"
        />

        <div className="flex flex-col">
          <div>
            <h1 className="text-2xl font-bold">{detail_product.data?.name}</h1>

            <div className="w-7 h-1 bg-[#ffffff4d] my-3.5" />

            <div>
              <span className="mr-2 text-2xl font-bold line-through text-[#ccc]">
                {detail_product.data.old_price.toLocaleString()} <sup>₫</sup>
              </span>

              <span className="text-2xl font-bold">
                {detail_product.data.new_price.toLocaleString()} <sup>₫</sup>
              </span>
            </div>

            <ul className="mt-4 list-disc">
              <li>
                <div>
                  <span className="mr-2">Tình trạng đơn hàng:</span>
                  <span className="text-sm  text-[#ccc]">
                    {detail_product.data.status === 1 ? "Còn hàng" : "Hết hàng"}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-end flex-1">
            <button
              className="w-full py-2 bg-[#f92424] mt-3.5 rounded-md"
              onClick={() => handleAddToCart(detail_product, 1)}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <HeadLine className="pt-10 text-2xl text-left border-t-[1px] border-t-[#5c5c5c]">
          Mô tả
        </HeadLine>

        {parse(detail_product.data.description)}
      </div>

      <div className="mt-10">
        <HeadLine className="pt-10 text-2xl text-left border-t-[1px] border-t-[#5c5c5c]">
          SẢN PHẨM TƯƠNG TỰ
        </HeadLine>

        <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {similar_product?.data?.map((el, idx) => (
            <CardItem
              key={idx}
              name={el.name}
              new_price={el.new_price.toLocaleString()}
              old_price={el.old_price.toLocaleString()}
              id={el.id}
              image={el.image}
              percent_discount={el.percent_discount}
            />
          ))}
        </div>

        {similar_product?.data.length <= 0 && (
          <span className="text-sm text-[#ccc]">
            Không có sản phẩm tương tự.{" "}
          </span>
        )}
      </div>
    </div>
  );
};

export default DetailProduct;
