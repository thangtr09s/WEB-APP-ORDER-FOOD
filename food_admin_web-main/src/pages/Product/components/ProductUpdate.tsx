import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import { FormInput } from "components";
import { FormSelect } from "components/Forms";
import QuillEditor from "components/Forms/QuillEditor";
import ModalBase from "components/Modal/ModalBase";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getProductById, updateProductById } from "services/productServices";

const OPTIONS = [
  { value: 1, label: "Còn hàng" },
  { value: 0, label: "Hết hàng" },
];

const ProductUpdate = ({ id }: any) => {
  const [status, setStatus] = useState<any>(OPTIONS[0]);

  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id as string),
    enabled: id !== undefined,
  });
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (formData: any) => updateProductById(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Cập nhật sản phẩm thành công");
    },
    onError: () => {
      toast.error("Cập nhật sản phẩm thất bại! Hãy kiểm tra lại thông tin");
    },
  });

  const { control, handleSubmit, setValue } = useForm();
  const [description, setDescription] = useState("");

  const onSubmit = useCallback(
    async (data: any) => {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("image", data.file);
      formData.append("description", description);
      formData.append("old_price", data.old_price);
      formData.append("new_price", data.new_price);
      formData.append("category_id", "1");
      formData.append("status", status.value);
      formData.append("name", data.name);

      // await createProduct(formData);
      mutate(formData);
    },
    [description, status, id]
  );

  const renderButtonAction = () => {
    return (
      <button
        className="create-btn"
        onClick={handleSubmit(onSubmit, () => {
          toast.error("Vui lòng nhập đẩy đủ các trường");
        })}
      >
        Chỉnh sửa
      </button>
    );
  };

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("old_price", data.old_price);
      setValue("new_price", data.new_price);
      setValue("file", data.image);
    }
  }, [data]);

  return (
    <ModalBase type="modal_update" heading="CHỈNH SỬA" button_action={renderButtonAction}>
      {!data ? (
        <div>loading...</div>
      ) : (
        <Fragment>
          <FormInput
            control={control}
            name="name"
            placeholder="Nhập tên sản phẩm"
            label="Tên sản phẩm"
            containerClassName="mb-5"
          />

          <FormInput
            control={control}
            name="old_price"
            placeholder="Nhập giá cũ"
            label="Giá cũ"
            containerClassName="mb-5"
          />

          <FormInput
            control={control}
            name="file"
            placeholder="Nhập link hình ảnh"
            label="Hình ảnh"
            containerClassName="mb-5"
          />

          <FormInput
            control={control}
            name="new_price"
            placeholder="Nhập giá mới"
            label="Giá mới"
            containerClassName="mb-5"
          />

          <FormSelect
            defaultValue={status}
            onChange={setStatus}
            options={OPTIONS}
            label="Tình trạng đơn hàng"
            containerClassName="mb-5"
            defaultInputValue={data.status === 1 ? "Còn hàng" : "Hết hàng"}
          />

          <QuillEditor
            setValue={setDescription}
            value={description == "" ? data.description : description}
            label="Mô tả"
          />
        </Fragment>
      )}
    </ModalBase>
  );
};

export default ProductUpdate;
