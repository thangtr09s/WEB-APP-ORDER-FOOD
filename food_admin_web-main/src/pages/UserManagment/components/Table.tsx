import RcTable from "rc-table";

import { EditIcon, TrashIcon } from "assets/icons";

const Table = ({ data, setId }: any) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên người dùng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mã người giới thiệu", // input type == text
      dataIndex: "referral_code",
      key: "referral_code",
    },
    {
      title: "Số điện thoại", // input type = string
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Chức năng",
      dataIndex: "",
      key: "operations",
      render: (text: any, record: any) => (
        <div
          className="flex items-center gap-4"
          onClick={() => {
            setId(record.id);
          }}
        >
          <label htmlFor="modal_delete">
            <TrashIcon className="cursor-pointer hover:opacity-80 transition-base" />
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
