import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FormSelect } from "components/Forms";
import ModalBase from "components/Modal/ModalBase";
import { updateOrderById } from "services/orderServices";

const OPTIONS = [
  { value: 0, label: "Đang chờ xác nhận" },
  { value: 1, label: "Đang giao hàng" },
  { value: 2, label: "Đã giao hàng" },
];

const OrderUpdate = ({ id }: any) => {
  const [status, setStatus] = useState<any>("");

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (formData) => updateOrderById(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success("Cập nhật sản phẩm thành công");
    },
    onError: () => {
      toast.error("Cập nhật sản phẩm thất bại! Hãy kiểm tra lại thông tin");
    },
  });

  const onSubmit = useCallback(async () => {
    const formData = new FormData();
    formData.append("order_status", status.value);
    formData.append("order_id", id);

    // await createProduct(formData);
    mutate(formData as any);
  }, [status]);

  const renderButtonAction = () => {
    return (
      <button className="create-btn" onClick={onSubmit}>
        Chỉnh sửa
      </button>
    );
  };
  return (
    <ModalBase type="modal_update" heading="CẬP NHẬT" button_action={renderButtonAction}>
      <FormSelect
        defaultValue={status.value}
        onChange={setStatus}
        options={OPTIONS}
        label="Trạng thái đơn hàng"
        containerClassName="mb-5"
        // defaultInputValue={data.status === 1 ? "Còn hàng" : "Hết hàng"}
      />
    </ModalBase>
  );
};

export default OrderUpdate;
