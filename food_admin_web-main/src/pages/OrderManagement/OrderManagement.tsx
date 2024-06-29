import { useQuery, useQueries } from "@tanstack/react-query";
import { getOrders } from "services/orderServices";

import Table from "./components/Table";
import { HeadingTable } from "components";
import OrderView from "./components/OrderView";
import ViewModal from "components/Modal/ViewModal";
import OrderUpdate from "./components/OrderUpdate";
import { useLocalStorage } from "react-use";
import { getProductById } from "services/productServices";

const OrderManagement = () => {
  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
  const [id, setId] = useLocalStorage("id");

  return (
    <div>
      <p className="headline">Quản lý đơn hàng </p>

      <HeadingTable isButtonCreate={false}>
        <Table data={data} setId={setId} />
      </HeadingTable>

      <ViewModal />

      <OrderUpdate id={id} />
    </div>
  );
};

export default OrderManagement;
