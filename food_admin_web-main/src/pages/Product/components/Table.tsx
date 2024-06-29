import { EditIcon, EyeIcon, TrashIcon } from "assets/icons";
import RcTable from "rc-table";
import { useLocalStorage } from "react-use";

const Table = ({ data, setId }: any) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Tên sản phẩm", // input type == text
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Hình ảnh", // input type == text
      dataIndex: "image",
      key: "image",
      render: (record: any) => {
        return (
          <img src={record} alt="" className="object-cover w-full lg:w-14 lg:h-14" />
        );
      },
    },

    {
      title: "Giá cũ", // input type == file
      dataIndex: "old_price",
      key: "old_price",
      render: (record: any) => <div>{record.toLocaleString()} đồng</div>,
    },

    {
      title: "Giá mới", // input type = string
      dataIndex: "new_price",
      key: "new_price",
      render: (record: any) => <div>{record.toLocaleString()} đồng</div>,
    },

    {
      title: "Danh mục", // input type = string
      dataIndex: "category_id",
      key: "category_id",

      render: (record: any) => (
        <div>
          {record.category_id === 1
            ? "Thực phẩm ăn liền"
            : record.category_id === 2
            ? "Đồ ăn vặt"
            : record.category_id === 3
            ? "Thực phẩm sức khỏe"
            : "Đồ dùng cần thiết"}
        </div>
      ),
    },

    {
      title: "Tình trạng", // textArea
      dataIndex: "status",
      key: "status",
      render: (text: any, record: any) => (
        <div>{record.status === 1 ? "Còn hàng" : "Hết hàng"}</div>
      ),
    },
    {
      title: "Chức năng",
      dataIndex: "",
      key: "operations",
      render: (text: any, record: any) => (
        <div className="flex items-center gap-4">
          <label
            htmlFor="modal_view"
            onClick={() => {
              setId(record.id);
            }}
          >
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
          <label
            htmlFor="modal_delete"
            onClick={() => {
              setId(record.id);
            }}
          >
            <TrashIcon className="cursor-pointer hover:opacity-80 transition-base" />
          </label>
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-x-auto">
      <RcTable
        columns={columns}
        data={data}
        className="table"
        scroll={{ y: 500 }}
        tableLayout="auto"
      />
    </div>
  );
};

export default Table;
