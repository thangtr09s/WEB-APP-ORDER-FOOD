import ViewContentModal from "components/Modal/ViewContentModal";
import { getProductById } from "services/productServices";
import { useQuery } from "@tanstack/react-query";

const ProductView = ({ id }: any) => {
  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id as string),
    enabled: id !== undefined,
  });

  return (
    <ViewContentModal
      description={
        data && data.description ? data.description : "loading..."
      }
    />
  );
};

export default ProductView;
