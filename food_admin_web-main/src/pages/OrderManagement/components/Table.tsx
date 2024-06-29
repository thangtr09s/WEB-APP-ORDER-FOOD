import { EditIcon, EyeIcon, TrashIcon } from "assets/icons";
import RcTable from "rc-table";

const Table = ({ data, setId }: any) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Ngày đặt hàng",
      dataIndex: "order_date",
      key: "order_date",
    },

    {
      title: "Tình trạng đơn hàng",
      dataIndex: "order_status",
      key: "order_status",
      render: (text: any, record: any) => (
        <div>
          {record.order_status === 0
            ? "Đang chờ xác nhận"
            : record.order_status === 1
            ? "Đang giao hàng"
            : "Đã giao hàng"}
        </div>
      ),
    },
    {
      title: "Tổng giá tiền",
      dataIndex: "order_total",
      key: "order_total",
    },
    {
      title: "Phương thức thanh toán",
      dataIndex: "payment_method_id",
      key: "payment_method_id",
      render: (record: any) => (
        <div>
          {record.payment_method_id === 1 ? "Thanh toán khi nhận hàng" : "Chuyển khoản"}
        </div>
      ),
    },
    {
      title: "Chức năng",
      dataIndex: "",
      key: "operations",
      render: (record: any) => (
        <div className="flex items-center gap-4">
          <label htmlFor="modal_view">
            <EyeIcon className="cursor-pointer hover:opacity-80 transition-base" />
          </label>
          <label
            htmlFor="modal_update"
            onClick={() => {
              setId(record.id);
            }}
          >
            <EditIcon className="cursor-pointer hover:opacity-80 transition-base" />
          </label>
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-x-auto">
      <RcTable columns={columns} data={data} className="table" scroll={{ y: 500 }} />
    </div>
  );
};

export default Table;
