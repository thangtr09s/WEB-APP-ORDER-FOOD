import { Fragment, useMemo } from "react";
import { useQueries } from "@tanstack/react-query";

import TopMovieItem from "./components/TopMovieItem";
import { CARD_ITEM } from "./components/MockData";
import CardItem from "./components/CardItem";
import {
  getStatisticals,
  getTopCategories,
  getTopProducts,
} from "services/DashboardService";

const DashBoard = () => {
  const [statisticals, topProducts] = useQueries({
    queries: [
      {
        queryKey: ["statisticals"],
        queryFn: getStatisticals,
      },
      {
        queryKey: ["top_product"],
        queryFn: getTopProducts,
      },
    ],
  });

  const renderStatisticals = useMemo(() => {
    if (statisticals.data == undefined) return;

    return statisticals.data.map((el: any, idx: number) => {
      const item = CARD_ITEM[idx];

      return (
        <CardItem
          key={idx}
          icon={item.icon}
          view={el.total_count}
          title={el.title}
          bg_color={item.bg_color}
        />
      );
    });
  }, [statisticals]);

  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {renderStatisticals}
      </div>

      {/* top movie */}
      <div className="grid grid-cols-1 gap-10 mt-5 sm:grid-cols-2 xl:grid-cols-3">
        <TopMovieItem
          heading="Top sản phẩm được bán theo ngày"
          data={topProducts.data?.top_products_by_day}
        />
        <TopMovieItem
          heading="Top sản phẩm được bán theo tuần"
          data={topProducts.data?.top_products_by_month}
        />
        <TopMovieItem
          heading="Top sản phẩm được bán theo tháng"
          data={topProducts.data?.top_products_by_week}
        />
      </div>
    </Fragment>
  );
};

export default DashBoard;
