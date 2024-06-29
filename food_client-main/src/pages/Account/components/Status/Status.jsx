import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getOrders } from "../../../../services/orderServices";
import { useAuth } from "../../../../contexts/AuthProvider";

const Status = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["orders", user.phone],
    queryFn: () => getOrders(user.phone),
  });

  if (isLoading) return <p>loading...</p>;

  const result = data.find((data) => data.id == id);

  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <td>Tên đơn hàng</td>
            <td>Số lượng đã đặt</td>
            <td>Sô điện thoại</td>
            <td>Ngày đặt hàng</td>
            <td>Trạng thái đơn hàng</td>
            <td>Phương thức thanh toán</td>
            <td>Tổng tiền</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{result.product_name}</td>
            <td>{result.product_quantity}</td>
            <td>{result.shipping_phone}</td>
            <td>{result.order_date}</td>
            <td>
              {result.order_status == 1
                ? "Đơn hàng chưa được xác nhận"
                : "Đơn hàng đã được xác nhận"}
            </td>

            <td>Thanh toán khi nhận hàng</td>
            <td>{result.product_total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Status;
