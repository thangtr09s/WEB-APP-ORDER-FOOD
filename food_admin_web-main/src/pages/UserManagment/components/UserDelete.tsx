import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserById } from "services/auth";
import DeleteModal from "components/Modal/DeleteModal";

const UserDelete = ({ id, clearId }: any) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id: any) => deleteUserById(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    //   clearId("id");
      toast.success("xóa thành công");
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

export default UserDelete;
