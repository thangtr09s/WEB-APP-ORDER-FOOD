import { useMutation, useQueryClient } from "@tanstack/react-query";

import DeleteModal from "components/Modal/DeleteModal";
import { deletePoduct } from "services/productServices";
import { toast } from "react-toastify";

const ProductDelete = ({ id, clearId }: any) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id: any) => deletePoduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("xóa thành công");
      // clearId("id");
    },
    onError: () => {
      toast.error("xóa Thất bại");
    },
  });

  const handleDeleteNews = () => {
    mutate(id);
  };

  const renderButtonAction = () => {
    return (
      <label htmlFor="modal_delete" className="delete-btn" onClick={handleDeleteNews}>
        Xác nhận xóa
      </label>
    );
  };

  return <DeleteModal button_action={renderButtonAction} />;
};

export default ProductDelete;
