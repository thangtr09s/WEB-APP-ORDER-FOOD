import { useQuery } from "@tanstack/react-query";
import { useLocation, Link } from "react-router-dom";
import { getSearchValue } from "../../services/searchServices";
import CardItem from "../../components/CardItem";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");

  const { data, isLoading } = useQuery({
    queryKey: ["search", keyword],
    queryFn: () => getSearchValue(keyword),
  });

  if (isLoading)
    return (
      <div className="text-center">
        <span className="text-blue-600 loading loading-spinner" />
      </div>
    );

  return (
    <div className="my-5 max-w-[1080px] mx-auto px-7">
      <p className="mb-5 text-lg font-bold text-center">
        TỪ KHÓA TÌM KIẾM: {keyword}
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {data?.success?.map((el, idx) => (
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
      {data?.error && <p className="text-sm font-normal text-[#ccc]">Không tìm thấy sản phẩm nào phù hợp!</p>}
    </div>
  );
};

export default Search;
