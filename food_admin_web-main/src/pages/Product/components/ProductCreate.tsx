import { FormInput } from "components";
import { FormSelect } from "components/Forms";
import QuillEditor from "components/Forms/QuillEditor";
import ModalBase from "components/Modal/ModalBase";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createProduct } from "services/productServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const OPTIONS = [
  { value: 1, label: "Còn hàng" },
  { value: 0, label: "Hết hàng" },
];

const CATEGORIES = [
  {
    value: 1,
    label: "Thực phẩm ăn liền",
  },
  {
    value: 2,
    label: "Đồ ăn vặt",
  },
  {
    value: 3,
    label: "Thực phẩm sức khỏe",
  },
  {
    value: 4,
    label: "Dồ dùng cần thiết",
  },
];

const ProductCreate = () => {
  const { control, handleSubmit } = useForm();
  const [status, setStatus] = useState<any>(OPTIONS[0]);
  const [categories, setCategories] = useState<any>(CATEGORIES[0]);

  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (formData: any) => createProduct(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Thêm sản phẩm thành công");
    },
    onError: () => {
      toast.error("Thêm sản phẩm thất bại! Hãy kiểm tra lại thông tin");
    },
  });

  const onSubmit = useCallback(
    (data: any, e: any) => {
      if (data.old_price < data.new_price)
        return toast.error("Giá cũ phải lớn hơn giá mới");

      const formData = new FormData();
      formData.append("file", data.file);
      formData.append("description", description);
      formData.append("old_price", data.old_price);
      formData.append("new_price", data.new_price);
      formData.append("category_id", categories.value);
      formData.append("status", status.value);
      formData.append("name", data.name);

      mutate(formData);
    },
    [description, status]
  );

  const renderButtonAction = () => (
    <label
      className="create-btn"
      htmlFor="modal_create"
      onClick={handleSubmit(onSubmit, () => {
        toast.error("Vui lòng nhập đẩy đủ các trường");
      })}
    >
      Tạo mới
    </label>
  );

  return (
    <ModalBase type="modal_create" heading="TẠO MỚI" button_action={renderButtonAction}>
      <FormInput
        control={control}
        name="name"
        placeholder="Nhập tên sản phẩm"
        label="Tên sản phẩm"
        containerClassName="mb-5"
      />

      <FormInput
        control={control}
        inputType="number"
        name="old_price"
        placeholder="Nhập giá cũ"
        label="Giá cũ"
        containerClassName="mb-5"
      />

      <FormInput
        control={control}
        inputType="number"
        name="new_price"
        placeholder="Nhập giá mới"
        label="Giá mới"
        containerClassName="mb-5"
      />
      <FormInput
        control={control}
        name="file"
        placeholder="Nhập link hình ảnh"
        label="Hình ảnh"
        containerClassName="mb-5"
      />

      <FormSelect
        defaultValue={categories}
        onChange={setCategories}
        options={CATEGORIES}
        label="Danh mục"
        containerClassName="mb-5"
      />

      <FormSelect
        defaultValue={status}
        onChange={setStatus}
        options={OPTIONS}
        label="Tình trạng đơn hàng"
        containerClassName="mb-5"
      />

      <QuillEditor setValue={setDescription} value={description} label="Mô tả" />
    </ModalBase>
  );
};

export default ProductCreate;
