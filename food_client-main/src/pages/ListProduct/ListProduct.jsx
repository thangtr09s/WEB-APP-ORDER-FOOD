import { useParams } from "react-router-dom";
import { useQuery, useQ } from "@tanstack/react-query";

import CardItem from "../../components/CardItem";
import { NAV_ITEM } from "../../components/Layout/constants";
import { getListProduct } from "../../services/ListProduct";

const ListProduct = () => {
  const params = useParams();

  const result = NAV_ITEM.find((item) => item.href.includes(params.name));
  const { data: listProduct, isLoading } = useQuery({
    queryKey: ["list_product", params.name],
    queryFn: () => getListProduct(params.name),
    staleTime: 30000,
    gcTime: 50000,
  });

  if (isLoading)
    return (
      <div className="text-center">
        <span className="text-blue-600 loading loading-spinner" />
      </div>
    );
  return (
    <div className="max-w-[1080px] mx-auto px-4">
      <p className="mb-5 text-2xl font-bold text-center">{result.title}</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {listProduct.data.map((el, idx) => (
          <CardItem
            key={idx}
            id={el.id}
            name={el.name}
            old_price={el.old_price}
            new_price={el.new_price}
            image={el.image}
          />
        ))}
      </div>
      {listProduct.data.length <= 0 && (
        <p className="text-sm font-normal text-gray-300">
          Không có sản phẩm của danh mục này!
        </p>
      )}
    </div>
  );
};

export default ListProduct;
